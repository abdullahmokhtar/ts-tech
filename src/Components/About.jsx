import React from "react";
import logo from "../assets/imgs/logo.png";

const About = ({ secTitle, t1, p1, t2, p2 }) => {
  return (
    <section id="about" className="py-5 my-4 about">
      <div className="container">
        <h2 className="sec-title mb-2">{secTitle ? secTitle : "About Us"}</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={logo} alt="logo" className="w-75" />
          </div>
          <div className="col-md-6">
            <div className="border-start border-dark border-4 h-100 ps-3 py-3">
              <h3 className="fw-bold about-title2">{t1 ? t1 : "Our Vision"}</h3>
              <p className="fw-semibold">
                {p1
                  ? p1
                  : ` Build long-term success for each of our clients! We strive to
                provide our clients with the most cost-effective yet practical
                solutions to help them grow their online and offline presence
                while exceeding their business goals. Through smart solutions, a
                talented team, friendly service, fast delivery, and ongoing
                support.`}
              </p>
              <h3 className="fw-bold about-title2">
                {t2 ? t2 : "Our Mission"}
              </h3>
              <p className="fw-semibold">
                {p2
                  ? p2
                  : `Understanding your business requirements and objectives and
                enabling us create the best solution to achieve your business
                goal! We take time to get to know every client so we can deliver
                the most suitable solution for them. We develop resources using
                cutting-edge technology that provides maximum return on
                investments for the longterm growth of each of them.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
