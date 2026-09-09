// ==========================================
// GET HOTEL ID FROM URL
// ==========================================

const params = new URLSearchParams(window.location.search);

const hotelId = params.get("id");


// ==========================================
// FIND HOTEL
// ==========================================

const hotel = hotels.find((h) => h.id == hotelId);

console.log("Hotel ID:", hotelId);
console.log("Selected Hotel:", hotel);


// ==========================================
// CHECK HOTEL
// ==========================================

if (!hotel) {

    alert("Hotel not found.");

    window.location.href = "hotels.html";

}


// ==========================================
// DISPLAY HOTEL NAME
// ==========================================

document.getElementById("hotelName").textContent =
    hotel.name;


// ==========================================
// DATE INPUT
// ==========================================

const dateInput =
    document.getElementById("bookingDate");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;


// ==========================================
// TIME INPUT
// ==========================================

const timeInput =
    document.getElementById("bookingTime");


// ==========================================
// GUEST INPUT
// ==========================================

const guestsInput =
    document.getElementById("guests");


// ==========================================
// CHECK AVAILABILITY BUTTON
// ==========================================

const searchBtn =
    document.getElementById("searchAvailabilityBtn");


// ==========================================
// AVAILABLE TABLES CONTAINER
// ==========================================

const tablesContainer =
    document.getElementById("availableTables");


// ==========================================
// CHECK AVAILABILITY
// ==========================================

searchBtn.addEventListener("click", function () {

    const selectedDate =
        dateInput.value;

    const selectedTime =
        timeInput.value;

    const guestCount =
        Number(guestsInput.value);


    // ------------------------------------------
    // DATE VALIDATION
    // ------------------------------------------

    if (!selectedDate) {

        alert("Please select a date.");

        return;

    }


    // ------------------------------------------
    // TIME VALIDATION
    // ------------------------------------------

    if (!selectedTime) {

        alert("Please select a time.");

        return;

    }


    // ------------------------------------------
    // GUEST VALIDATION
    // ------------------------------------------

    if (!guestCount) {

        alert("Please select number of guests.");

        return;

    }


    // ------------------------------------------
    // OPENING HOURS VALIDATION
    // ------------------------------------------

    if (
        selectedTime < "11:00" ||
        selectedTime > "23:00"
    ) {

        alert(
            "This hotel is open from 11:00 AM to 11:00 PM."
        );

        return;

    }


    // ------------------------------------------
    // CLEAR OLD TABLES
    // ------------------------------------------

    tablesContainer.innerHTML = "";


    // ------------------------------------------
    // FIND SUITABLE TABLES
    // ------------------------------------------

    const suitableTables =
        hotel.tables.filter(
            (table) => table.capacity >= guestCount
        );


    // ------------------------------------------
    // NO TABLE FOUND
    // ------------------------------------------

    if (suitableTables.length === 0) {

        tablesContainer.innerHTML = `

            <div class="col-12">

                <div class="alert alert-warning">

                    No suitable tables found for
                    ${guestCount} guests.

                </div>

            </div>

        `;

        return;

    }


    // ==========================================
    // DISPLAY TABLES
    // ==========================================

    suitableTables.forEach((table) => {

        const col =
            document.createElement("div");

        col.classList.add("col-md-4");


        col.innerHTML = `

            <div class="card shadow-sm h-100">

                <div class="card-body">

                    <h5 class="fw-bold">

                        <i class="bi bi-table text-primary"></i>

                        ${table.name}

                    </h5>


                    <p class="mb-1">

                        <i class="bi bi-people-fill"></i>

                        Capacity:
                        ${table.capacity} people

                    </p>


                    <p class="text-muted">

                        <i class="bi bi-geo-alt-fill"></i>

                        ${table.location}

                    </p>


                    <button
                        class="btn btn-outline-primary w-100 select-table-btn"
                        data-table-id="${table.id}">

                        <i class="bi bi-check-circle"></i>

                        Select Table

                    </button>

                </div>

            </div>

        `;


        // Add card to page

        tablesContainer.append(col);


        // ======================================
        // SELECT TABLE BUTTON
        // ======================================

        const selectButton =
            col.querySelector(".select-table-btn");


        selectButton.addEventListener(
            "click",
            function () {

                // Get selected table ID

                const selectedTableId =
                    Number(this.dataset.tableId);


                // Create booking data

                const bookingData = {

                    hotelId: hotel.id,

                    tableId: selectedTableId,

                    date: selectedDate,

                    time: selectedTime,

                    guests: guestCount

                };


                // Save booking data

                localStorage.setItem(
                    "currentBooking",
                    JSON.stringify(bookingData)
                );


                console.log(
                    "Booking Saved:",
                    bookingData
                );


                // Redirect to booking page

                window.location.href =
                    "booking.html";

            }
        );

    });

});