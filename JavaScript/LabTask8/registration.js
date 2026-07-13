const userType = document.getElementById("userType");
const roll = document.getElementById("roll");
const dept = document.getElementById("dept");

userType.addEventListener("change", function () {

    if (userType.value == "Student") {
        roll.style.display = "block";
        dept.style.display = "none";
    }
    else if (userType.value == "Teacher") {
        roll.style.display = "none";
        dept.style.display = "block";
    }
    else {
        roll.style.display = "none";
        dept.style.display = "none";
    }

});