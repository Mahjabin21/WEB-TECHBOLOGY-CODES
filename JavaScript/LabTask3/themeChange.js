let darkMode = false;
const themebtn = document.getElementById("themebtn");
themebtn.addEventListener("click", function () {
    if (darkMode == false) {
        document.body.classList.add("dark-mode");
        darkMode = true;
        themebtn.textContent = "Switch to the light mode";
    }
    else {
        document.body.classList.remove("dark-mode");
        darkMode = false;
        themebtn.textContent = "Switch to the dark mode";
    }

});