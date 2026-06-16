document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let branch = document.getElementById("branch").value;

    if (name === "" || email === "" || mobile === "" || branch === "") {
        document.getElementById("message").innerHTML =
            "Please fill all fields!";
        return;
    }

    document.getElementById("message").innerHTML =
        "Registration Successful!";
});
