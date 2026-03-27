// Student data stored using objects inside an array

let students = [
    {
        name: "Rahul",
        marks: [80, 75, 90]
    },
    {
        name: "Ananya",
        marks: [85, 88, 92]
    },
    {
        name: "Kiran",
        marks: [70, 65, 78]
    }
];

// Calculate average marks

students.forEach(function(student) {

    let total = 0;

    for(let i = 0; i < student.marks.length; i++){
        total += student.marks[i];
    }

    let average = total / student.marks.length;

    console.log(student.name + " Average Marks: " + average);

});