console.log("HOTEL DETAILS JS IS RUNNING");


// Get hotel ID from URL
const params = new URLSearchParams(window.location.search);

const hotelId = params.get("id");

console.log("Hotel ID:", hotelId);


// Find hotel from data.js
const hotel = hotels.find((h) => h.id == hotelId);

console.log("Selected Hotel:", hotel);


// Check if hotel exists
if (!hotel) {

    alert("Hotel not found.");

    window.location.href = "hotels.html";

} else {


    // ================= HOTEL IMAGE =================

    const hotelImage =
        document.getElementById("hotelImage");

    hotelImage.src = hotel.image;

    hotelImage.alt = hotel.name;



    // ================= BASIC INFORMATION =================

    document.getElementById("hotelName").textContent =
        hotel.name;


    document.getElementById("hotelLocation").textContent =
        hotel.location;


    document.getElementById("hotelRating").textContent =
        `⭐ ${hotel.rating}`;


    document.getElementById("hotelDescription").textContent =
        hotel.description;



    // ================= PRICE =================

    document.getElementById("hotelPrice").textContent =
        `₹${hotel.price} / person`;



    // ================= OPENING HOURS =================

    document.getElementById("hotelHours").textContent =
        hotel.openingHours;



    // ================= CUISINE =================

    const cuisineContainer =
        document.getElementById("hotelCuisine");


    cuisineContainer.innerHTML = "";


    hotel.cuisine.forEach((cuisine) => {

        const span = document.createElement("span");

        span.classList.add(
            "badge",
            "text-bg-secondary",
            "p-2"
        );

        span.textContent = cuisine;

        cuisineContainer.append(span);

    });



    // ================= FACILITIES =================

    const facilitiesContainer =
        document.getElementById("hotelFacilities");


    facilitiesContainer.innerHTML = "";


    hotel.facilities.forEach((facility) => {

        const span = document.createElement("span");

        span.classList.add(
            "badge",
            "text-bg-light",
            "border",
            "p-2"
        );

        span.textContent = facility;

        facilitiesContainer.append(span);

    });



    // ================= TABLES =================

    const tablesContainer =
        document.getElementById("hotelTables");


    tablesContainer.innerHTML = "";


    hotel.tables.forEach((table) => {

        const col = document.createElement("div");

        col.classList.add("col-md-4");


        col.innerHTML = `

            <div class="card h-100 shadow-sm">

                <div class="card-body">

                    <h6 class="fw-bold">

                        <i class="bi bi-table text-primary"></i>

                        ${table.name}

                    </h6>


                    <p class="mb-1">

                        <i class="bi bi-people-fill"></i>

                        Capacity: ${table.capacity} people

                    </p>


                    <p class="text-muted mb-0">

                        <i class="bi bi-geo-alt-fill"></i>

                        ${table.location}

                    </p>

                </div>

            </div>

        `;


        tablesContainer.append(col);

    });



    // ================= CHECK AVAILABILITY =================

    const checkAvailabilityBtn =
        document.getElementById("checkAvailabilityBtn");


    checkAvailabilityBtn.href =
        `availability.html?id=${hotel.id}`;

}