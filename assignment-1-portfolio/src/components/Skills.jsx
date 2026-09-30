function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C",
    "SQL"
  ];

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;