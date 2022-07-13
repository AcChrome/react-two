import React from "react";
import Grid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section>
      <img src={Grid} className="hero--photo" />
      <h1 className="hero--header"> Online Experience</h1>
      <p className="hero--text">
        Join unique interaction activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
