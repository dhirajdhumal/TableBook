// ================================
// REGISTER
// ================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get input values

        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const phone =
            document.getElementById("registerPhone").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        // Check passwords

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        // Get existing users

        let users =
            JSON.parse(localStorage.getItem("users")) || [];


        // Check existing email

        const existingUser =
            users.find(
                user => user.email === email
            );


        if (existingUser) {

            alert("An account with this email already exists.");

            return;
        }


        // Create user

        const newUser = {

            id: Date.now(),

            name: name,

            email: email,

            phone: phone,

            password: password

        };


        // Add user

        users.push(newUser);


        // Save users

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        console.log("Registered User:", newUser);


        alert("Registration successful!");


        // Go to login

        window.location.href = "login.html";

    });

}



// ================================
// LOGIN
// ================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get login values

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        // Get users

        const users =
            JSON.parse(localStorage.getItem("users")) || [];


        // Find matching user

        const user =
            users.find(
                user =>
                    user.email === email &&
                    user.password === password
            );


        console.log("Login User:", user);


        // Check login

        if (!user) {

            alert("Invalid email or password.");

            return;
        }


        // Save logged-in user

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );


        alert("Login successful!");


        // Go to home page

        window.location.href = "index.html";

    });

}