document.getElementById("signUp").addEventListener("submit", function (event) {

    event.preventDefault();
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("confPassError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("success").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmpass = document.getElementById("confirmpass").value;
    let phone = document.getElementById("phone").value.trim();

    let valid = true;

    if (name == "") {
        document.getElementById("nameError").innerText = "Full Name is required";
        valid = false;
    }
    if (email == "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Email is required this format: yourname@example.com";
        valid = false;
    }
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password have to at least 6 characters";
        valid = false;

    }
    if (password != confirmpass) {
        document.getElementById("confPassError").innerText = "Password did not match";
        valid = false;
    }

    if (phone == "" || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must contain only digits.";
        valid = false;
    }

    if (valid) {
        document.getElementById("success").innerText = "Registration Successful!";
    }
})