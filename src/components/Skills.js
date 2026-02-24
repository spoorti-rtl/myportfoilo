import React from "react";

function Skills() {
  const skills = ["Java", "SQL", "HTML", "CSS", "JavaScript", "React", "Linux"];
  const tools = ["Eclipse", "MySQL", "Oracle", "VS Code", "Arduino IDE", "TinkerCad", "Thingsboard", "Blynk"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <h2>Tools</h2>
      <ul>{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
    </section>
  );
}

export default Skills;