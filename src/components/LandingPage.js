import React from "react";
import LandingPageProfilePhoto from "../assets/LandingPageProfilePhoto.jpg";

const LandingPage = () => {
  return (
    <div>
      <div
        className="container d-flex align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="row align-items-center">
          <div className="col text-end">
            <h2>Hi there!</h2>
            <h2>
              I'm Azheem, a recent software engineering bootcamp graduate.
            </h2>
            <h2>Welcome to my Portfolio.</h2>
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
