import React from "react";

function Education() {
  const educationData = [
    {
      year: "2018",
      institution: "Sri Taralabalu School, Haveri, Karnataka",
      qualification: "Class 10",
      score: "84.6%"
    },
    {
      year: "2020",
      institution: "SPSM INDP PU College, Davangere",
      qualification: "Class 12",
      score: "89.5%"
    },
    {
      year: "2025",
      institution: "UBDT College of Engineering",
      qualification: "B.E",
      score: "CGPA: 8.69"
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.year}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.qualification}</p>
            <p>{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;