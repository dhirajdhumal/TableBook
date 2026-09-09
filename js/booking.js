// ==========================================
// GET BOOKING DATA FROM LOCALSTORAGE
// ==========================================

const bookingData =
    JSON.parse(localStorage.getItem("currentBooking"));

console.log("Current Booking:", bookingData);


// ==========================================
// CHECK BOOKING DATA
// ==========================================

if (!bookingData) {

    alert("No booking information found.");

    window.location.href = "hotels.html";

} else {

    // ==========================================
    // FIND SELECTED HOTEL
    // ==========================================

    const hotel = hotels.find(
        h => h.id == bookingData.hotelId
    );

    console.log("Selected Hotel:", hotel);


    // ==========================================
    // CHECK HOTEL
    // ==========================================

    if (!hotel) {

        alert("Hotel information not found.");

        window.location.href = "hotels.html";

    } else {

        // ==========================================
        // FIND SELECTED TABLE
        // ==========================================

        const table = hotel.tables.find(
            t => t.id == bookingData.tableId
        );

        console.log("Selected Table:", table);


        // ==========================================
        // CHECK TABLE
        // ==========================================

        if (!table) {

            alert("Table information not found.");

            window.location.href = "hotels.html";

        } else {

            // ==========================================
            // DISPLAY BOOKING INFORMATION
            // ==========================================

            document.getElementById("bookingHotel").textContent =
                hotel.name;


            document.getElementById("bookingTable").textContent =
                table.name;


            document.getElementById("bookingDate").textContent =
                bookingData.date;


            document.getElementById("bookingTime").textContent =
                bookingData.time;


            document.getElementById("bookingGuests").textContent =
                bookingData.guests;


            // ==========================================
            // CONFIRM BOOKING BUTTON
            // ==========================================

            const confirmBookingBtn =
                document.getElementById("confirmBookingBtn");


            confirmBookingBtn.addEventListener(
                "click",
                function () {


                    // ==================================
                    // GET CUSTOMER DETAILS
                    // ==================================

                    const customerName =
                        document
                            .getElementById("customerName")
                            .value
                            .trim();


                    const customerEmail =
                        document
                            .getElementById("customerEmail")
                            .value
                            .trim();


                    const customerPhone =
                        document
                            .getElementById("customerPhone")
                            .value
                            .trim();


                    const specialRequest =
                        document
                            .getElementById("specialRequest")
                            .value
                            .trim();


                    // ==================================
                    // VALIDATION
                    // ==================================

                    if (!customerName) {

                        alert("Please enter your name.");

                        return;

                    }


                    if (!customerEmail) {

                        alert("Please enter your email.");

                        return;

                    }


                    if (!customerPhone) {

                        alert("Please enter your phone number.");

                        return;

                    }


                    // ==================================
                    // CREATE FINAL BOOKING
                    // ==================================

                    const finalBooking = {

                        id: Date.now(),

                        hotelId: bookingData.hotelId,

                        hotelName: hotel.name,

                        tableId: bookingData.tableId,

                        tableName: table.name,

                        date: bookingData.date,

                        time: bookingData.time,

                        guests: bookingData.guests,

                        customerName: customerName,

                        customerEmail: customerEmail,

                        customerPhone: customerPhone,

                        specialRequest: specialRequest,

                        status: "Confirmed"

                    };


                    console.log(
                        "Final Booking:",
                        finalBooking
                    );


                    // ==================================
                    // GET EXISTING BOOKINGS
                    // ==================================

                    let bookings =
                        JSON.parse(
                            localStorage.getItem("bookings")
                        ) || [];


                    // ==================================
                    // ADD NEW BOOKING
                    // ==================================

                    bookings.push(finalBooking);


                    // ==================================
                    // SAVE BOOKINGS
                    // ==================================

                    localStorage.setItem(
                        "bookings",
                        JSON.stringify(bookings)
                    );


                    // ==================================
                    // REMOVE TEMPORARY BOOKING
                    // ==================================

                    localStorage.removeItem(
                        "currentBooking"
                    );


                    // ==================================
                    // REDIRECT TO CONFIRMATION
                    // ==================================

                    window.location.href =
                        `confirmation.html?id=${finalBooking.id}`;

                }
            );

        }

    }

}