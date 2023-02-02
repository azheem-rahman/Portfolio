import React from "react";

import AboutMeProfilePhoto from "../assets/AboutMeProfilePhoto.jpg";

const AboutMe = () => {
  return (
    <div>
      <div
        className="container"
        style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
      >
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-4 d-flex align-items-center">
                <img
                  src={AboutMeProfilePhoto}
                  className="rounded-circle"
                  width={100}
                  alt="about-me-profile-photo"
                />
              </div>
              <div className="col-8">
                <p>Azheem Rahman</p>
                <p>Aspiring Software Engineer</p>
                <p>azheem.rahman@gmail.com</p>
                <p>Singapore</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h1>About Me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eu pulvinar augue. Suspendisse dui nisl, sodales in ex at,
                gravida tempor arcu. Suspendisse condimentum eros lacus, sit
                amet accumsan turpis pretium id.
              </p>
              <p>
                Suspendisse sollicitudin, sem eu porta sollicitudin, dolor enim
                pharetra ex, et tempor ante sapien vitae ligula. Praesent vel
                tortor imperdiet, fringilla magna vel, tristique orci. In
                finibus tortor sed cursus luctus. Quisque molestie sagittis
                ante, non iaculis metus commodo id. Morbi sapien sapien, porta
                dapibus pulvinar quis, tempus quis eros.
              </p>
            </div>
            <div className="row">
              <h1>Insert Experience Flowchart here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
