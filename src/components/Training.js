import React from "react";

function Training() {
  const trainings = [
    {
      company: "Kodnest Technologies Pvt. Ltd.",
      detail: "Trainee - Industrial Training"
    },
    {
      company: "Varcons Technologies, Bangalore",
      detail: "1 month online training on Embedded Systems"
    }
  ];

  return (
    <section id="training">
      <h2>Industrial Training</h2>
      <div className="training-container">
        {trainings.map((t, index) => (
          <div key={index} className="training-card">
            <h3>{t.company}</h3>
            <p>{t.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Training;