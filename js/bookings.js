// Get bookings from localStorage

const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


// Get containers

const bookingsContainer =
    document.getElementById("bookingsContainer");

const noBookings =
    document.getElementById("noBookings");


console.log("All Bookings:", bookings);


// Check whether bookings exist

if (bookings.length === 0) {

    noBookings.classList.remove("d-none");

} else {

    // Display bookings

    bookings.forEach(function (booking) {

        const col =
            document.createElement("div");

        col.classList.add(
            "col-md-6",
            "col-lg-4"
        );


        col.innerHTML = `

            <div class="card shadow-sm h-100">

                <div class="card-body">

                    <div class="d-flex justify-content-between align-items-start mb-3">

                        <h5 class="fw-bold mb-0">
                            <i class="bi bi-building text-primary"></i>
                            ${booking.hotelName}
                        </h5>

                        <span class="badge text-bg-success">
                            ${booking.status}
                        </span>

                    </div>


                    <hr>


                    <p class="mb-2">
                        <i class="bi bi-table text-primary"></i>
                        <strong>Table:</strong>
                        ${booking.tableName}
                    </p>


                    <p class="mb-2">
                        <i class="bi bi-calendar3 text-primary"></i>
                        <strong>Date:</strong>
                        ${booking.date}
                    </p>


                    <p class="mb-2">
                        <i class="bi bi-clock text-primary"></i>
                        <strong>Time:</strong>
                        ${booking.time}
                    </p>


                    <p class="mb-2">
                        <i class="bi bi-people-fill text-primary"></i>
                        <strong>Guests:</strong>
                        ${booking.guests}
                    </p>


                    <p class="mb-0">
                        <i class="bi bi-person-fill text-primary"></i>
                        <strong>Name:</strong>
                        ${booking.customerName}
                    </p>

                </div>


                <div class="card-footer bg-white border-0 p-3">

                    <a
                        href="confirmation.html?id=${booking.id}"
                        class="btn btn-outline-primary w-100">

                        <i class="bi bi-eye"></i>
                        View Booking

                    </a>

                </div>

            </div>

        `;


        bookingsContainer.append(col);

    });

}