import React from "react";

function About() {
  return (
    <section className="h-screen">
      <div className="h-4/5 grid grid-flow-row gap-8 place-content-evenly lg:grid-flow-col">
        <div className="bg-blue-300 h-24 w-24">1</div>
        <div className="bg-blue-300 h-24 w-24">2</div>
        <div className="bg-blue-300 h-24 w-24">3</div>
      </div>
    </section>
  );
}

export default About;
