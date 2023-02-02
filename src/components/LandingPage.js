import React from "react";
import LandingPageProfilePhoto from "../assets/LandingPageProfilePhoto.jpg";

const LandingPage = () => {
  return (
    <div>
      <div
        className="container"
        style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
      >
        <div className="row">
          <div className="col">
            <h1>Hi there!</h1>
            <h1>I'm Azheem, an aspiring software engineer.</h1>
            <h2>Welcome to my Portfolio.</h2>
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src={LandingPageProfilePhoto}
              width={200}
              alt="landing-page-profile-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
