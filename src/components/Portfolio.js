import React from "react";

import BuyHDBLoginPage from "../assets/BuyHDBLoginPage.jpg";
import ColourPopScreenshot from "../assets/ColourPopScreenshot.jpg";

const Portfolio = () => {
  return (
    <div>
      <div
        className="container"
        style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
      >
        <h1>Projects</h1>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <h5 className="card-header">BuyHDB</h5>
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={BuyHDBLoginPage}
                  alt="Card image cap"
                />
                {/* <h5 className="card-title">BuyHDB</h5> */}
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  See Project
                </a>
              </div>
              <div className="card-footer text-muted">Nov 2022</div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <h5 className="card-header">ItsRainingRaincoats</h5>
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={BuyHDBLoginPage}
                  alt="Card image cap"
                />
                {/* <h5 className="card-title">BuyHDB</h5> */}
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  See Project
                </a>
              </div>
              <div className="card-footer text-muted">Nov 2022</div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <h5 className="card-header">Colour-Pop</h5>
              <div className="card-body">
                <img
                  className="card-img-top"
                  src={ColourPopScreenshot}
                  alt="Card image cap"
                />
                {/* <h5 className="card-title">BuyHDB</h5> */}
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  See Project
                </a>
              </div>
              <div className="card-footer text-muted">Nov 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
