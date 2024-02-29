import React from "react";

const Service = ({ secTitle, p1, p2, p3, p4 }) => {
  return (
    <section id="service" className="services">
      <div className="container">
        <h2 className="sec-title">{secTitle ? secTitle : "Our Services"}</h2>
        <ul className="row my-4">
          <li className="service  col-md-3">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <h3>UI/UX DESIGN</h3>
            <p>
              {p1
                ? p1
                : `Focuses on creating intuitive, visually appealing, and seamless
              interactions between users and digital products or services.`}
            </p>
          </li>
          <li className="service col-md-3">
            <i className="fa-solid fa-code"></i>
            <h3>APP DEVELOPMENT</h3>
            <p>
              {p2
                ? p2
                : "creation of software applications for various platforms such as mobile devices, desktop computers, or web browsers."}
            </p>
          </li>
          <li className="service col-md-3">
            <i className="fa-solid fa-umbrella"></i>
            <h3>PRODUCT DESIGN</h3>
            <p>
              {p3
                ? p3
                : "involves the process of creating and developing physical or digital products that meet the needs and desires of users while also aligning with business objectives."}
            </p>
          </li>
          <li className="service col-md-3">
            <i className="fa-solid fa-gears"></i>
            <h3>Quality Assurance</h3>
            <p>
              {p4
                ? p4
                : "a systematic process that ensures products or services meet specified requirements and standards. "}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
