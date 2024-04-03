import React from "react";

const students = [
  {
    id: 8,
    name: "Seungho",
  },
  {
    id: 9,
    name: "Guesung",
  },
  { id: 7, name: "Heungmin" },
  {
    id: 11,
    name: "Heechan",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
