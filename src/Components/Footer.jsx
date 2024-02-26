import React from "react";
import qr from "../assets/imgs/qr.png";

const Footer = ({
  secTitle,
  title1,
  title2,
  description,
  building,
  buildingDesc,
  location,
  locationDesc,
  mail,
  placeholder1,
  placeholder2,
  placeholder3,
  submit,
}) => {
  return (
    <section id="contact" className="pt-4 pb-3">
      <h2 className="sec-title">{secTitle}</h2>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-5">
            <div className="pe-3">
              <h3>{title1}</h3>
              <p>{description}</p>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-holder ms-3 me-4">
                  <i className="fa-solid fa-building fa-2x"></i>
                </div>
                <div className="contact-text">
                  <h4 className="mb-1">{building}</h4>
                  <p>{buildingDesc}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-holder ms-3 me-4">
                  <i className="fa-solid fa-location-dot fa-2x"></i>
                </div>
                <div className="contact-text">
                  <h4 className="mb-1">{location}</h4>
                  <p>{locationDesc}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-holder ms-3 me-4">
                  <i className="fa-solid fa-envelope fa-2x"></i>
                </div>
                <div className="contact-text">
                  <h4 className="mb-1">{mail ? mail : "E-mail"}</h4>
                  <p>
                    <a href="mailto:info@tibaswiss.ch">info@tibaswiss.ch</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-3 m-auto">
            <img src={qr} className="w-100 my-3 py-3 " alt="qr" />
          </div>
          <div className="col-md-6">
            <form
              action="mailto:info@tibaswiss.ch"
              method="post"
              encType="text/plain"
            >
              <h3>{title2}</h3>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="name"
                    id="name"
                    placeholder={placeholder1}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder={mail ? mail : "E-mail"}
                    required
                  />
                </div>
              </div>
              <input
                className="form-control mt-2"
                type="text"
                name="subject"
                id="subject"
                placeholder={placeholder2}
                required
              />
              <textarea
                className="form-control my-2"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder={placeholder3}
              ></textarea>
              <button type="submit" className="btn btn-success">
                {submit}
              </button>
            </form>
          </div>
        </div>
      </div>
      <a
        href="https://wa.link/1e0co9"
        target="_blank"
        rel="noreferrer"
        className="whats"
      >
        <i className="fa-brands fa-whatsapp fa-3x text-success"></i>
      </a>
    </section>
  );
};

export default Footer;
