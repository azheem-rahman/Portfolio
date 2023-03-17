import React from "react";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <div className={styles.container}>
        <div className="row">
          <div className="col">
            <div className={styles.typewriter}>
              <h3>Hi there!</h3>
            </div>
            <h5>
              I'm <span style={{ backgroundColor: "#2E5A88" }}>Azheem</span>, a
              recent software engineering bootcamp graduate with a new found
              passion in coding.
            </h5>
            <h5>Welcome to my Portfolio.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
