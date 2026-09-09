// Get logged-in user

const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));


// Check whether user is logged in

if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

} else {

    // Display profile information

    document.getElementById("profileName").textContent =
        loggedInUser.name;

    document.getElementById("userName").textContent =
        loggedInUser.name;

    document.getElementById("userEmail").textContent =
        loggedInUser.email;

    document.getElementById("userPhone").textContent =
        loggedInUser.phone;
}


// Logout button

const logoutBtn =
    document.getElementById("logoutBtn");


logoutBtn.addEventListener("click", function () {

    // Remove logged-in user

    localStorage.removeItem("loggedInUser");


    alert("Logged out successfully.");


    // Go to login page

    window.location.href = "login.html";

});