import React from "react";
import logo from "../assets/imgs/TS BG.png";

const About = ({
  secTitle,
  t1,
  t3,
  t4,
  p1,
  t2,
  p2,
  border,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  secStyle,
}) => {
  return (
    <section id="about" className="py-5 my-4 about">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 ">
            <img src={logo} alt="logo" className="w-75" />
          </div>
          <h2 className={`${secStyle} mb-2 ms-3`}>
            {secTitle ? secTitle : "About Us"}
          </h2>
          <div className="col-md-12">
            <div className={`h-100 py-3`}>
              {/* <h3 className="fw-bold about-title">{t1 ? t1 : "Our Vision"}</h3> */}
              <p className="fw-semibold fs-4 mb-5">
                {p1
                  ? p1
                  : ` TS-Tech is a leading web and mobile application development company in Egypt, providing innovative and modern solutions that meet the needs of its customers. We use the latest technologies and standards to design websites and applications that are easy to use, fast in performance, secure, and search engine compatible.`}
              </p>
              {/* <h3 className="fw-bold about-title">
                {t2 ? t2 : "Our Mission"}
              </h3> */}
              <p className="fw-semibold fs-4 mb-5">
                {p2
                  ? p2
                  : `We have a team of specialized engineers and experts in the field of SEO, who work hard to provide the best services and support to our customers. We care about our customers' satisfaction and strive to build long-term relationships with them. We provide free consultations and comprehensive analyzes of your projects and suggest solutions suitable for your goals. If you are looking for a reliable and professional company to design your website or application, do not hesitate to contact us.`}
              </p>
              <p className="fw-semibold fs-4 mb-5">
                {p3
                  ? p3
                  : "If you are looking for a reliable and professional company to design your website or app, do not hesitate to contact us."}
              </p>
              <p className="fw-semibold fs-4 mb-5">
                {p4
                  ? p4
                  : "Thanks to your cooperation with TSS Company, you will find the ideal solution for your needs in the field of web application development and mobile phone application design, to guarantee you the utmost excellence and modern vision."}
              </p>
              <p className="fw-semibold fs-4 mb-5">
                {p5
                  ? p5
                  : "We are proud of our distinction as one of the best programming companies in Egypt, as we provide distinct and innovative solutions in the world of designing and developing applications and websites. Our specialized team has extensive experience in the fields of programming and design, which makes us able to meet our customers’ requirements with high efficiency and accuracy."}
              </p>
              <h2 className={`${secStyle} mb-2 ms-1 ps-1`}>
                {t2 ? t2 : "Website design"}
              </h2>
              <p className="fw-semibold fs-4 mb-1">
                {p6
                  ? p6
                  : "At TS-Tech, we believe that website design should be comprehensive and professional. We provide website design services that feature aesthetics, powerful functionality, and great user experience. Whether you are looking for a website for your business or personal project, we are here to bring your vision to life online."}
              </p>
              <h2 className={`${secStyle} mb-2 ms-1 ps-1`}>
                {t3 ? t3 : "Mobile application design"}
              </h2>
              <p className="fw-semibold fs-4 mb-5">
                {p7
                  ? p7
                  : "We also provide mobile application design services with the latest technologies and creative methods. We guarantee you a great user experience and a user-friendly interface, which will make your app stand out among its competitors and become a huge success on digital platforms."}
              </p>
              <h2 className={`${secStyle} mb-2 ms-1 ps-1`}>
                {t4 ? t4 : "Why TS-Tech?"}
              </h2>
              <p className="fw-semibold fs-4 mb-5">
                {p8
                  ? p8
                  : "TS-Tech Company is one of the largest programming companies in Egypt. It has an excellent reputation as one of the best software companies ever, as it occupies a prominent position among the largest software companies in the world."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
