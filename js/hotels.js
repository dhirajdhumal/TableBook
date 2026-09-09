// ==========================================
// DISPLAY ALL HOTELS
// ==========================================

const hotelsContainer =
    document.getElementById("hotelsContainer");

const hotelCount =
    document.getElementById("hotelCount");


// Function to display hotels
function displayHotels(hotelsToShow) {

    // Clear container
    hotelsContainer.innerHTML = "";


    // Update count
    hotelCount.textContent = `${hotelsToShow.length} Hotel${hotelsToShow.length !== 1 ? 's' : ''}`;


    // Check if no hotels
    if (hotelsToShow.length === 0) {

        hotelsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    <i class="bi bi-exclamation-triangle fs-1"></i>
                    <h4 class="mt-3">No Hotels Found</h4>
                    <p class="mb-0">Try adjusting your search filters.</p>
                </div>
            </div>
        `;

        return;
    }


    // Display each hotel
    hotelsToShow.forEach(function (hotel) {

        const col = document.createElement("div");

        col.classList.add("col-md-6", "col-lg-4");


        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">

                <!-- Hotel Image -->
                <img src="${hotel.image}"
                    class="card-img-top" 
                    alt="${hotel.name}"
                    style="height: 220px; object-fit: cover;">

                <!-- Card Body -->
                <div class="card-body">

                    <div class="d-flex justify-content-between align-items-center">

                        <h5 class="card-title fw-bold mb-0">
                            ${hotel.name}
                        </h5>

                        <span class="badge text-bg-warning">
                            ⭐ ${hotel.rating}
                        </span>

                    </div>

                    <p class="text-muted mt-2">
                        <i class="bi bi-geo-alt-fill"></i>
                        ${hotel.location}
                    </p>

                    <p class="card-text">
                        ${hotel.description}
                    </p>

                    <div class="d-flex justify-content-between align-items-center">

                        <span class="text-primary fw-bold">
                            ₹${hotel.price} / person
                        </span>

                        <a href="hotel-details.html?id=${hotel.id}" 
                           class="btn btn-outline-primary">
                            View Hotel
                        </a>

                    </div>

                </div>

            </div>
        `;


        hotelsContainer.appendChild(col);

    });

}


// Display all hotels initially
displayHotels(hotels);



// ==========================================
// FILTER FUNCTIONALITY
// ==========================================

const locationFilter =
    document.getElementById("locationFilter");

const cuisineFilter =
    document.getElementById("cuisineFilter");

const ratingFilter =
    document.getElementById("ratingFilter");

const searchBtn =
    document.getElementById("searchBtn");


// Search button click event
searchBtn.addEventListener("click", function () {

    filterHotels();

});


// Also filter on dropdown change
locationFilter.addEventListener("change", filterHotels);
cuisineFilter.addEventListener("change", filterHotels);
ratingFilter.addEventListener("change", filterHotels);


// Filter function
function filterHotels() {

    const selectedLocation =
        locationFilter.value;

    const selectedCuisine =
        cuisineFilter.value;

    const selectedRating =
        ratingFilter.value;


    console.log("Filters:", {
        location: selectedLocation,
        cuisine: selectedCuisine,
        rating: selectedRating
    });


    // Start with all hotels
    let filteredHotels = hotels;


    // Filter by location
    if (selectedLocation !== "all") {

        filteredHotels = filteredHotels.filter(function (hotel) {
            return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
        });

    }


    // Filter by cuisine
    if (selectedCuisine !== "all") {

        filteredHotels = filteredHotels.filter(function (hotel) {

            return hotel.cuisine.some(function (c) {
                return c.toLowerCase() === selectedCuisine.toLowerCase();
            });

        });

    }


    // Filter by rating
    if (selectedRating !== "all") {

        const minRating = parseFloat(selectedRating);

        filteredHotels = filteredHotels.filter(function (hotel) {
            return hotel.rating >= minRating;
        });

    }


    console.log("Filtered Hotels:", filteredHotels);


    // Display filtered hotels
    displayHotels(filteredHotels);

}
