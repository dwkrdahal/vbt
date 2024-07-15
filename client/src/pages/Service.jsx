import React from "react";
import { useAuth } from "../store/auth";

export default function Service() {
  const { services } = useAuth();

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
              <div className="card">
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
