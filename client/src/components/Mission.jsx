import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "../assets/banner.mp4";

export default function Mission() {
  return (
    <>
      <section
        className="mission-section d-flex align-items-center justify-content-center text-center"
        style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="mission-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with Blur */}
        <div className="mission-overlay">
          <h1 className="display-4 mb-4">Our Mission</h1>
          <p className="lead">
            To revolutionize the agriculture sector by empowering farmers and
            buyers with an efficient, transparent, and sustainable marketplace
            that promotes growth, innovation, and fair trade for all
            stakeholders.
          </p>
        </div>
      </section>

      <style jsx>{`
        /* Scope styles specifically to the Mission component */
        .mission-section {
          position: relative;
        }

        .mission-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          z-index: -1;
        }

        .mission-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 10px;
          z-index: 1;
          color: white;
          text-align: center;
        }

        .mission-overlay h1,
        .mission-overlay p {
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </>
  );
}