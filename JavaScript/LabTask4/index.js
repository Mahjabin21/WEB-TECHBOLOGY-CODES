const btn = document.getElementById("addStudent");
btn.addEventListener("click", function () {
    //create element
    const studentTable = document.getElementById("studentTable");
    const row = document.createElement("tr");
    const nameTd = document.createElement("td");
    const rollTd = document.createElement("td");
    const deptTd = document.createElement("td");
    const actionTd = document.createElement("td");

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const dept = document.getElementById("dept").value;
    if (name == "" || roll == "" || dept == "") {
        alert("please fill al the fields");
        return;

    }

    nameTd.innerText = name;
    rollTd.innerText = roll;
    deptTd.innerText = dept;
    //delete data element 
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", function () {
        studentTable.removeChild(row);
    })


    actionTd.appendChild(delBtn);
    row.append(nameTd, rollTd, deptTd, actionTd);
    studentTable.appendChild(row);


    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
})

