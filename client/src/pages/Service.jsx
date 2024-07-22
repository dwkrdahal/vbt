import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function Service() {
  const { API } = useAuth();
  const fetchServicesURL = `${API}/data/service`;

  const [services, setServices] = useState([]);

  useEffect( () => {
    fetchServices();
  },[])

  //fetch services
  const fetchServices = async () => {
    try {
      const response = await fetch(fetchServicesURL, {
        method: "GET",
      });

      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        // console.log(data.response);
        setServices(data.response);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1>Our services</h1>
        </div>

        <div className="container grid grid-three-cols">
          {services.map((currElem, index) => {
            const { price, description, provider, service } = currElem;

            return (
              <div className="card" key={currElem._id}>
                <div className="card-img">
                  <img
                    src="images/design.png"
                    alt="services info"
                    width="300"
                    height="auto"
                  />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <button onClick={fetchServices}>ok</button> */}
    </>
  );
}
