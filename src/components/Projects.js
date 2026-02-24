import React from "react";

function Projects() {
  const projects = [
    { name: "Portfolio Website", link: "https://github.com/spoorti-rtl/Portfolio" },
    { name: "Smart Plant Watering System", link: "#" },
    { name: "Smart Parking System", link: "#" },
    { name: "IoT Home Automation", link: "#" }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.name}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">{p.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;