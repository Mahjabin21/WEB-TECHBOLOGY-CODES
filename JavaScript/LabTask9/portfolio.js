//-------------------theme toggling-----------------------
let darkMode = false;
const themebtn = document.getElementById("themebtn");
themebtn.addEventListener("click", function () {

    if (darkMode == false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themebtn.innerText = "Light mode";
        darkMode = true;
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themebtn.innerText = "Dark mode";
        darkMode = false;
    }

});
//--------------------------greeting toggling-------------------
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
    greeting.innerHTML = "Good Morning";
}
else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon";
}
else {
    greeting.innerHTML = "Good Evening";
}
//section toggling
const aboutbtn = document.getElementById("about");
const projectbtn = document.getElementById("project");
const contactbtn = document.getElementById("contact");

const aboutMe = document.getElementById("aboutMe");
const projectMe = document.getElementById("projectMe");
const contactMe = document.getElementById("contactMe");

aboutbtn.addEventListener("click", function () {

    aboutMe.style.display = "block";
    projectMe.style.display = "none";
    contactMe.style.display = "none";

});
projectbtn.addEventListener("click", function () {

    aboutMe.style.display = "none";
    projectMe.style.display = "block";
    contactMe.style.display = "none";

});
contactbtn.addEventListener("click", function () {

    aboutMe.style.display = "none";
    projectMe.style.display = "none";
    contactMe.style.display = "block";

});
//--------------------contact form validation-------------------
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {

    let valid = true;
    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const messageErr = document.getElementById("messageErr");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    messageErr.innerHTML = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name == "") {
        nameErr.innerHTML = "Name is required to fill";
        valid = false;
    }
    let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == "") {
        emailErr.innerHTML = "Email is required to fill";
        valid = false;

    }
    else if (!emailpattern.test(email)) {
        emailErr.innerHTML = "Email Format is wrong";
        valid = false;
    }

    if (message == "") {
        messageErr.innerHTML = "Message is required";
        valid = false;
    }

    else if (message.length < 10) {
        messageErr.innerHTML = "Minumum 10 letter required";
        valid = false;
    }



    if (valid) {
        alert("Registration successful");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

});