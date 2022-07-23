import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
