let disclaimerContainer = document.getElementById("disclaimerContent");

function loadDisclaimer(disclaimerContent) {

    let h1Element = document.createElement("h1");
    h1Element.className = "text-body-emphasis";
    h1Element.textContent = disclaimerContent.title;

    let pElement = document.createElement("p");
    pElement.className = "col-lg-8 mx-auto lead";
    pElement.textContent = disclaimerContent.paragraph;

    let olElement = document.createElement("ol");
    olElement.className = "col-lg-8 mx-auto lead";

    disclaimerContent.listItems.forEach(itemText => {
        let liElement = document.createElement("li");
        liElement.innerHTML = itemText;
        olElement.appendChild(liElement);
    });

    disclaimerContainer.appendChild(h1Element);
    disclaimerContainer.appendChild(pElement);
    disclaimerContainer.appendChild(olElement);
}

// Sample data for disclaimer content
let disclaimerContent = {
    title: "Disclaimer",
    paragraph: "At Siva Sports Hub, we are committed to providing a safe and enjoyable football turf experience for all our patrons. To ensure a smooth and secure environment, we kindly request all participants and visitors to adhere to the following guidelines:",
    listItems: [
        "<strong>Footwear Requirement:</strong> For the safety of players and the integrity of our natural grass turf, proper footwear is mandatory. Participants must wear cleats or turf shoes designed for football. Failure to comply may result in restricted access to the playing area.",
        "<strong>Intentional Damage Policy:</strong> Any intentional damage to the football turf or related facilities will not be tolerated. Participants found responsible for such actions will be liable for repair or replacement costs and may be subject to additional penalty charges.",
        "<strong>Strict Adherence to Time Rules:</strong> To ensure a fair and organized schedule for all participants, strict adherence to allocated time slots is required. Late arrivals may result in a shortened playing time, and extensions are subject to availability.",
        "<strong>Payment Before Play:</strong> All bookings must be paid in full before the commencement of play. Payment confirms reservation and secures the allocated time slot. Refunds or rescheduling are subject to our cancellation policy.",
        "<strong>Code of Conduct:</strong> Participants are expected to conduct themselves in a sportsmanlike manner, respecting fellow players and facility staff. Any behavior deemed disruptive or violating our code of conduct may result in immediate expulsion from the premises."
    ]
};

// Call the function to load disclaimer content
loadDisclaimer(disclaimerContent);

