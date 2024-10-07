let students = [];
let editIndex = -1;

function displayStudents() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = ""; 

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>${student.Id}</td>
            <td>${student.Branch}</td>
            <td>${student.StudentStatus}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const Id = document.getElementById("Id").value;
    const Branch = document.querySelector("input[name='Branch']:checked")?.value;
    const StudentStatus = document.querySelector("input[name='StudentStatus']:checked")?.value;
    if (editIndex >= 0) {
        students[editIndex] = { name, age, grade ,Id,Branch,StudentStatus };
        editIndex = -1; 
    } else {
        students.push({ name, age, grade ,Id,Branch,StudentStatus});
    }

    clearInputs();
    displayStudents();
}

function editStudent(index) {
    editIndex = index;
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("grade").value = student.grade;
    document.getElementById("Id").value = student.Id;
    document.getElementById("Branch").value = student.Branch;
    document.getElementById("StudentStatus").value = student.StudentStatus;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("Id").value = "";
    document.getElementById("Branch").value = "";
    document.getElementById("StudentStatus").value = "";
}
displayStudents();