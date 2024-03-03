import img1 from "../assets/imgs/logo-boat-wash.png";
import img2 from "../assets/imgs/logo-car-wash.png";
import img3 from "../assets/imgs/airplane-logo.png";

const Projects = ({ secTitle, p1, message, p2, p3 }) => {
  return (
    <section id="work" className="our-skills py-4 my-3">
      <div className="container">
        <h2 className="sec-title">{secTitle ? secTitle : "Our Projects"}</h2>
        <div className="row g-4 my-4 justify-content-center ">
          <div className="col-md-6">
            <div className="box-shadow">
              <div className="icon">
                <img src={img1} alt="TSI Boat Wash" />
              </div>
              <h4>TSI Boat Wash</h4>
              <p>
                {p1
                  ? p1
                  : `Website offers a comprehensive solution for boat owners to maintain their vessels in top condition. With user-friendly navigation and intuitive design, the website provides information about boat washing services, including packages`}
              </p>
              <a
                href="https://www.tsboatwash24.com/index.html"
                target="_blank"
                rel="noreferrer"
              >
                {message ? message : "Explore More"}
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-shadow ">
              <div className="icon">
                <img src={img2} alt="" />
              </div>
              <h4>TSI CAR Wash</h4>
              <p>
                {p2
                  ? p2
                  : `website provides a platform for customers to learn about
                available services With a user-friendly interface and responsive
                design, the website aims to streamline the car washing process`}
              </p>
              <a
                href="https://www.tsiwash24.com"
                target="_blank"
                rel="noreferrer"
              >
                {message ? message : "Explore More"}
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-shadow">
              <div className="icon">
                <img src={img3} alt="" />
              </div>
              <h4>TSI Airline Wash</h4>
              <p>
                {p3
                  ? p3
                  : "website offers comprehensive aircraft cleaning and detailing services to ensure the highest standards of cleanliness and hygiene for airlines and private aircraft operators. With a user-friendly interface, the website provides detailed information about the range of services offered"}
              </p>
              <a
                href="https://www.tsairplanewash24.com"
                target="_blank"
                rel="noreferrer"
              >
                {message ? message : "Explore More"}
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
