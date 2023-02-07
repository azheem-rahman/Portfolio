import React from "react";
import LandingPageProfilePhoto from "../assets/LandingPageProfilePhoto.jpg";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <div
        className="container d-flex align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="row align-items-center">
          <div className="col text-end">
            <h4>Hi there!</h4>
            <h4>
              I'm Azheem, a recent software engineering bootcamp graduate.
            </h4>
            <h4>Welcome to my Portfolio.</h4>
          </div>
          <div className="col justify-content-center">
            <img
              src={LandingPageProfilePhoto}
              className="img-fluid"
              width={200}
              alt="landing-page-profile-photo"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
