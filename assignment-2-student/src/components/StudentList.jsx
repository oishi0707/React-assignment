import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div className="student-container">

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}

    </div>
  );
}

export default StudentList;