// Function to fetch data from numbersapi.com
const fetchNumberFact = async (number, elementId) => {
    try {
        const response = await fetch(`http://numbersapi.com/${number}`);
        const data = await response.text();
        console.log(data);
        document.getElementById(elementId).innerText = data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Function to update the date elements and fetch number facts
const updateDateAndFacts = async () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const day = today.getDate();

    document.getElementById("month").innerText = month;
    document.getElementById("year").innerText = year;
    document.getElementById("day").innerText = day;
    document.getElementById("cy").innerText = year;

    // Fetching number facts
    fetchNumberFact(month, "monthText");
    fetchNumberFact(year, "yearText");
    fetchNumberFact(day, "dayText");
};

// Function to handle search form submission
const querySearch = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search").value.trim();
    if (!searchInput) {
        alert("Search input cannot be empty");
    } else {
        const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(searchUrl, '_blank'); // Opens the search page in a new tab
    }
};

// Function to handle person select change
const profileChange = (event) => {
    const selectedValue = event.target.value;
    document.getElementById('imageId').setAttribute('src', `./assets/${selectedValue}.jpg`);
};

// Initialization function
const initialize = () => {
    // Update the date and fetch number facts on page load
    updateDateAndFacts();

    // Attach form submission event listener
    const form = document.querySelector("form");
    form.addEventListener("submit", querySearch);

    // Attach person select change event listener
    const personSelect = document.getElementById("person-select");
    personSelect.addEventListener('change', profileChange);
};

// Initialize when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialize);
