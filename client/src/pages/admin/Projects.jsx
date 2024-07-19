import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

function AdminProjects() {
  const { authorizationToken } = useAuth();
  const URL = "http://localhost:3000/api/admin/projects";
  const [projects, setProjects] = useState([]);

  const getAllProjects = async (req, res) => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setProjects(data);
    }
    console.log(projects);
  };

  const deleteProject = useCallback ( async (id) => {
    try {
      await fetch(`http://localhost:3000/api/admin/projects/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken
        }
      });

      toast.success("DELETED");

      getAllProjects();
    } catch (error) {
      console.log(error);
    }

  }, [authorizationToken])

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <section className="admin-project-section">
        <div className="container">
          <h1>Admin project Data</h1>
        </div>

        <div className="container grid-two-cols">
          {projects.map((project, index) => {
            return (
              <>
                <div className="project-card" key={index}>
                  <h2 className="project-title">{project.title}</h2>
                  <p>
                    <strong>Project Type:</strong> {project.projectType}
                  </p>
                  <p>
                    <strong>Architecture Style:</strong>{" "}
                    {project.architectureStyle}
                  </p>
                  <p className="project-description">{project.description}</p>
                  <p>
                    <strong>Year:</strong>{" "}
                    {new Date(project.year.start).getFullYear()} -{" "}
                    {project.year.completion}
                  </p>
                  <p>
                    <strong>Design Architect:</strong>{" "}
                    {project.designArchitect.name} (
                    {project.designArchitect.email})
                  </p>

                  <button className="btn">Edit</button>                  
                  <button onClick={() => {deleteProject(project._id)}} className="btn secondary-btn">Delete</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AdminProjects;
