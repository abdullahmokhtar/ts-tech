import React from "react";
import vid from "../assets/videos/T-Swiss BG.mp4";

const Home = () => {
  return (
    <section id="home" className="vh-100 pt-0">
      <div className="bg-video">
        <video autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="home-txt">
        <h2 className="fs-1">Experts Transform you Idea to Product</h2>
        <h4 className="fs-4 my-3">
          Utilizing cutting-edge technologies, <br />
          We Develop software solutions tailored for web and mobile platforms.
        </h4>
        <button className="btn btn-info fw-bold mt-2 py-2 px-3">
          Explore More <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </section>
  );
};

export default Home;
