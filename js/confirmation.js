// Get booking ID from URL
const params =
    new URLSearchParams(window.location.search);

const bookingId =
    params.get("id");


// Get all confirmed bookings
const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


// Find the booking
const booking =
    bookings.find(b => b.id == bookingId);


console.log("Booking ID:", bookingId);
console.log("Confirmed Booking:", booking);


// Check whether booking exists
if (!booking) {

    alert("Booking not found.");

    window.location.href = "hotels.html";

} else {

    // Display booking information

    document.getElementById("bookingId").textContent =
        booking.id;

    document.getElementById("hotelName").textContent =
        booking.hotelName;

    document.getElementById("tableName").textContent =
        booking.tableName;

    document.getElementById("bookingDate").textContent =
        booking.date;

    document.getElementById("bookingTime").textContent =
        booking.time;

    document.getElementById("bookingGuests").textContent =
        booking.guests;


    // Display customer information

    document.getElementById("customerName").textContent =
        booking.customerName;

    document.getElementById("customerEmail").textContent =
        booking.customerEmail;

    document.getElementById("customerPhone").textContent =
        booking.customerPhone;


    // Display booking status

    document.getElementById("bookingStatus").textContent =
        booking.status;
}