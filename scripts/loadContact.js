let contactDetailsContainer = document.getElementById("contactDetails");

function loadContact(contactDetails) {

    contactDetails.forEach(detail => {
        let pElement = document.createElement("p");

        let spanElement = document.createElement("span");
        spanElement.className = "fw-bold";
        spanElement.textContent = detail.value;

        pElement.innerHTML = `${detail.label}: `;
        pElement.appendChild(spanElement);

        contactDetailsContainer.appendChild(pElement);
    });
}

// Sample data for contact details
let contactDetails = [
    { label: "For general inquiries", value: "[General Contact Number]" },
    { label: "For facility bookings", value: "[Booking Contact Number]" },
    { label: "For events and tournaments", value: "[Events Contact Number]" },
    { label: "Football Trainer", value: "[Trainer Contact Number]" }
];

// Call the function to load contact details
loadContact(contactDetails);
