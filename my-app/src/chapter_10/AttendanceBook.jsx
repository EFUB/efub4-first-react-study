import React from 'react';

const students = [
    {
        id: 1,
        name: "Gabin",
    },
    {
        id: 2,
        name: "Billy",
    },
    {
        id: 3,
        name: "Wooroo",
    },
    {
        id: 4,
        name: "Hannah",
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