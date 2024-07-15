import React from 'react'
import { Analytics } from '../components'
import { useAuth } from '../store/auth'

export default function About() {

  const {user} = useAuth();
  console.log("from about",user);

  return (    
    <>
      <main>
        {/* 1st section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome, {user?.username } to our website </p>
              <h1>Why Choose US?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam adipisci possimus rerum est. Cum facere consequuntur
                minus, laborum voluptatem distinctio recusandae ratione vel
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam adipisci possimus rerum est. Cum facere consequuntur
                minus, laborum voluptatem distinctio recusandae ratione vel
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                minus, laborum voluptatem distinctio recusandae ratione vel
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                minus, laborum voluptatem distinctio recusandae ratione vel
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                minus, laborum voluptatem distinctio recusandae ratione vel
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
                src="/images/about.png"
                alt="working together"
                width="500px"
                height="auto"
              />
            </div>
          </div>
        </section>

        <Analytics/>

      </main>

    </>
  )
}
