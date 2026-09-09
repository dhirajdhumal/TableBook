const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

const authButton =
    document.getElementById("authButton");

const myBookingsLink =
    document.getElementById("myBookingsLink");


if (loggedInUser) {

    // Show My Bookings
    if (myBookingsLink) {
        myBookingsLink.style.display = "block";
    }

    // Change Login to Logout
    if (authButton) {
        authButton.innerHTML = `
            <i class="bi bi-box-arrow-right"></i>
            Logout
        `;

        authButton.classList.remove("btn-secondary");
        authButton.classList.add("btn-danger");

        authButton.removeAttribute("href");

        authButton.addEventListener("click", function () {

            localStorage.removeItem("loggedInUser");

            alert("Logged out successfully.");

            window.location.href = "login.html";
        });
    }

} else {

    // Hide My Bookings
    if (myBookingsLink) {
        myBookingsLink.style.display = "none";
    }

    // Show Login
    if (authButton) {
        authButton.innerHTML = `
            <i class="bi bi-person-fill"></i>
            Login
        `;

        authButton.href = "login.html";
    }
}