import React from "react";

const Welcome = () => {
  return (
    <section className="py-5 my-4">
      <div className="container text-center">
        <h2 className="fs-1 fw-bold">
          Welcome! <br />
          Your premier partner for software development solutions
        </h2>
        <h3 className="my-5">
          For <span className="text-danger">Web</span> and
          <span className="text-danger">Mobile App</span> Development
        </h3>
        <p className="w-75 m-auto text-black fs-5 fw-semibold">
          Welcome to our world! We're a specialized web and Mobile app
          Development & Software Development company offering tailored
          solutions. From crafting exceptional web and mobile apps for startups,
          enterprises, we're here to turn innovative ideas into reality. With
          our expert teams leading the charge, we provide comprehensive backend
          and frontend development
        </p>
        <button className="btn btn-outline text-info fw-bold">
          Know Us More <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Welcome;
