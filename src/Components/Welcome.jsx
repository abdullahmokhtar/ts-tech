/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

const Welcome = ({ t1, t2, t3, p, b }) => {
  let aboutElement;
  useEffect(() => {
    aboutElement = document.getElementById("about");
  }, []);
  return (
    <section className="py-5 my-4">
      <div className="container text-center">
        <h2 className="fs-1 fw-bold text-danger">
          {t1 ? t1 : "Welcome!"} <br />
          {t2 ? t2 : "Your premier partner for software development solutions"}
        </h2>
        <h3 className="my-5">
          {t3[0] ? t3[0] : "For "}
          <span className="text-danger">{t3[1] ? t3[1] : "Web "}</span>
          {t3[2] ? t3[2] : "and "}
          <span className="text-danger">{t3[3] ? t3[3] : "Mobile App "}</span>
          {t3[4] ? t3[4] : "Development "}
        </h3>
        <p className="w-75 m-auto text-black fs-5 fw-semibold">
          {p
            ? p
            : `Welcome to our world! We're a specialized web and Mobile app
          Development & Software Development company offering tailored
          solutions. From crafting exceptional web and mobile apps for startups,
          enterprises, we're here to turn innovative ideas into reality. With
          our expert teams leading the charge, we provide comprehensive backend
          and frontend development`}
        </p>
        <button
          className="btn btn-outline text-info fw-bold"
          onClick={() => aboutElement?.scrollIntoView({ behavior: "smooth" })}
        >
          {b ? b : "Know Us More"} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Welcome;
