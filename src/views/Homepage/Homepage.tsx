import React from "react";
import { Link } from "react-router-dom";
import imgUrl from "../../lib/imgUrl";
import "./styles.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-section banner-section">
        <div className="banner-title">
          <h1>
            Welcome to
            <img src={imgUrl.myJobsLogo.src} alt={imgUrl.myJobsLogo.alt} />
          </h1>
          <Link className="btn btn-primary btn-padding" to={"posted-jobs"}>
            Get Started
          </Link>
        </div>
        <div className="banner-image">
          <img src={imgUrl.bannerImg.src} alt={imgUrl.bannerImg.alt} />
        </div>
      </div>
      <div className="homepage-section blog-section">
        <h2 className="homepage-section-heading">Why Us</h2>
        <div className="cards-wrapper">
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h3>Get More Visibility</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h3>Organize Your Candidates</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h3>Verify Their Abilities</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-section company-section">
        <h2 className="homepage-section-heading">Companies Who Trust Us</h2>
        <div className="company-logo-wrapper">
          <img src={imgUrl["goldline"].src} alt={imgUrl["goldline"].alt} />
          <img src={imgUrl["ideaa"].src} alt={imgUrl["ideaa"].alt} />
          <img src={imgUrl["kanba"].src} alt={imgUrl["kanba"].alt} />
          <img src={imgUrl["lighting"].src} alt={imgUrl["lighting"].alt} />
          <img src={imgUrl["kanba"].src} alt={imgUrl["kanba"].alt} />
          <img src={imgUrl["liva"].src} alt={imgUrl["liva"].alt} />
          <img src={imgUrl["solaytic"].src} alt={imgUrl["solaytic"].alt} />
          <img src={imgUrl["velocity-9"].src} alt={imgUrl["velocity-9"].alt} />
          <img src={imgUrl["ztos"].src} alt={imgUrl["ztos"].alt} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
