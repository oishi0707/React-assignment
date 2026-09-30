import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Oishi Samanta",
      rollNumber: "101",
      department: "BCA",
      semester: 5,
      cgpa: 8.5,
      photo: "https://via.placeholder.com/150"
    },

    {
      id: 2,
      name: "Rahul Das",
      rollNumber: "102",
      department: "BCA",
      semester: 5,
      cgpa: 9.1,
      photo: "https://via.placeholder.com/150"
    },

    {
      id: 3,
      name: "Priya Roy",
      rollNumber: "103",
      department: "BCA",
      semester: 5,
      cgpa: 7.9,
      photo: "https://via.placeholder.com/150"
    }
  ]);

  function sortByCGPA() {

    const sortedStudents = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sortedStudents);
  }

  return (
    <>
      <Header />

      <main>

        <button
          className="sort-button"
          onClick={sortByCGPA}
        >
          Sort by CGPA
        </button>

        <StudentList students={students} />

      </main>

      <Footer />
    </>
  );
}

export default App;