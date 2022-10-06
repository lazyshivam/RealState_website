import React from "react";
import mike from "../image/Mike.jpg";
import rose from "../image/rose.jpg";

import john from "../image/john.jpg";

const About = () => {
  return (
    <>
    <div >
      <div className="about-section">
        <h1 style={{fontSize:'40px'}}>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint officiis nam explicabo saepe architecto, dolorum accusamus amet, sequi nulla deserunt tenetur porro. Sed in, quae sapiente placeat quam ratione?</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 style={{ textAlign: "center" ,fontSize:"40px" ,padding:'10px'}}>Our Team</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src={mike}
              alt="Jane"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={rose}
              alt="Mike"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={john}
              alt="John"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
