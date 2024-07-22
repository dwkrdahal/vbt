import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "./Project.css";

function Project() {

  const [projects, setProjects] = useState([])
  const [selectedProjectType, setSelectedProjectType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { API } = useAuth();
  const fetchProjectsURL = `${API}/project`;
  // console.log(fetchProjectsURL);

  useEffect( () => {
    fetchProjects();
  }, [])

  //fetch projects
  const fetchProjects = async () => {
    try {
      const response = await fetch(fetchProjectsURL, {
        method: "GET",
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProjects(data);
      }
    } catch (error) {
      console.log(`Project frontend error: ${error}`);
    }
  };

  // Filter projects based on selected project type and search term
  const filteredProjects = projects.filter((project) => {
    const matchesProjectType =
      selectedProjectType === "All" ||
      project.projectType === selectedProjectType;
    const matchesSearchTerm = searchTerm
      ? Object.values(project).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      : true;

    return matchesProjectType && matchesSearchTerm;
  });

  // Function to handle menu item clicks
  const handleProjectType = (projectType) => {
    setSelectedProjectType(projectType);
  };

  // Function to handle search input change and generate suggestions
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = projects
        .filter(
          (project) =>
            project.title.toLowerCase().includes(value.toLowerCase()) ||
            project.description.toLowerCase().includes(value.toLowerCase()) ||
            project.architectureStyle
              .toLowerCase()
              .includes(value.toLowerCase()) ||
            project.projectType.toLowerCase().includes(value.toLowerCase()) ||
            project.designArchitect.name
              .toLowerCase()
              .includes(value.toLowerCase()) ||
            project.siteArea.value.includes(value)
        )
        .slice(0, 5); // Limit suggestions to 5
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]);
    setSelectedProjectType(suggestion.projectType);
  };

  return (
    <>
      <section className="section-project">
        <div className="container">
          <h1>Projects</h1>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {suggestions.length > 0 && (
              <div className="suggestions-list">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion._id}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="project-menu">
            <button
              className="btn"
              onClick={() => {
                handleProjectType("All");
              }}
            >
              All
            </button>
            <button
              className="btn secondary-btn"
              onClick={() => {
                handleProjectType("Residential");
              }}
            >
              Residential
            </button>
            <button
              className="btn secondary-btn"
              onClick={() => {
                handleProjectType("Commercial");
              }}
            >
              Commercial
            </button>
            <button
              className="btn secondary-btn"
              onClick={() => {
                handleProjectType("Industrial");
              }}
            >
              Industrial
            </button>
          </div>
        </div>

        <div className="container grid grid-four-cols">
          {filteredProjects.map((currElem, index) => {
            const {
              title,
              images,
              description,
              architectureStyle,
              projectType,
              designArchitect,
            } = currElem;

            const imageUrl =
              images.length > 0 ? images[0].url : "images/image-1.jpg";

            return (
              <div className="card" key={currElem._id}>
                <div className="card-image">
                  <img src={imageUrl} alt={title} height="200" width="200" />
                </div>

                <div className="card-details">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="grid grid-two-cols">
                    <p>{architectureStyle}</p>
                    <p>{projectType}</p>
                    <p>{designArchitect.name}</p>
                    <p>{designArchitect.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Project;
