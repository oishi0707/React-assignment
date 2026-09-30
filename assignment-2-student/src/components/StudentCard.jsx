function StudentCard({ student }) {
  return (
    <div className="student-card">

      <img
        src={student.photo}
        alt={student.name}
      />

      <h2>{student.name}</h2>

      <p>
        <strong>Roll Number:</strong> {student.rollNumber}
      </p>

      <p>
        <strong>Department:</strong> {student.department}
      </p>

      <p>
        <strong>Semester:</strong> {student.semester}
      </p>

      <p>
        <strong>CGPA:</strong> {student.cgpa}
      </p>

    </div>
  );
}

export default StudentCard;