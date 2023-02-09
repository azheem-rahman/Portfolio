import React from "react";
import LandingPageProfilePhoto from "../assets/LandingPageProfilePhoto.jpg";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <div
        className="container d-flex align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="row align-items-center">
          <div className="col text-end">
            <h3>Hi there!</h3>
            <h5>
              I'm <span style={{ backgroundColor: "#2E5A88" }}>Azheem</span>, a
              recent software engineering bootcamp graduate with a new found
              passion in coding.
            </h5>
            <h5>Welcome to my Portfolio.</h5>
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
