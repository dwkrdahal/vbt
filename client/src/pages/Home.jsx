import React from "react";
import { Analytics } from "../components";

export default function Home() {
  return (
    <>
      <main>
        {/* 1st section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best IT Company </p>
              <h1>Welcome to DiwarTech</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam adipisci possimus rerum est. Cum facere consequuntur
                minus, laborum voluptatem distinctio recusandae ratione vel
                tempore dicta saepe voluptatibus ipsa impedit, necessitatibus
                dolorum. Eius hic quo rem sed esse quisquam? Exercitationem
                sunt, error dolor neque praesentium illum optio possimus cumque
                dicta fugit.
              </p>
              <div className="btn btn-group">
                <a href="">
                  <button className="btn">connect now</button>
                </a>
                <a href="">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="working together"
                width="500px"
                height="auto"
              />
            </div>
          </div>
        </section>

        {/* 2nd section */}
        <Analytics />

        {/* 3rd section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/services.png"
                alt="working together"
                width="500px"
                height="auto"
              />
            </div>
            
            <div className="hero-content">
              <p>We are here to help you </p>
              <h1>Get Started Today</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam adipisci possimus rerum est. Cum facere consequuntur
                minus, laborum voluptatem distinctio recusandae ratione vel
                tempore dicta saepe voluptatibus ipsa impedit, necessitatibus
                dolorum. Eius hic quo rem sed esse quisquam? Exercitationem
                sunt, error dolor neque praesentium illum optio possimus cumque
                dicta fugit.
              </p>
              <div className="btn btn-group">
                <a href="">
                  <button className="btn">connect now</button>
                </a>
                <a href="">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            
          </div>
        </section>


      </main>
    </>
  );
}
