/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import vid from "../assets/videos/T-Swiss BG.mp4";

const Home = ({ t1, t2, t3, b }) => {
  let serviceElement;
  useEffect(() => {
    serviceElement = document.getElementById("service");
  }, []);
  return (
    <section id="home" className="vh-100 pt-0">
      <div className="bg-video">
        <video muted={true} autoPlay loop={true} playsInline={true}>
          <source autoPlay src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="home-txt">
        <h2 className="fs-1">
          {t1 ? t1 : "Experts Transform you Idea to Product"}
        </h2>
        <h4 className="fs-4 my-3">
          {t2 ? t2 : "Utilizing cutting-edge technologies"}, <br />
          {t3
            ? t3
            : "We Develop software solutions tailored for web and mobile platforms."}
        </h4>
        <button
          className="btn btn-info fw-bold mt-2 py-2 px-3"
          onClick={() => {
            serviceElement?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {b ? b : "Explore More"} <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </section>
  );
};

export default Home;
