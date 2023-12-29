let eventContentsContainer = document.getElementById("eventContents");

function loadEventContents(eventDetails) {

    eventDetails.forEach(event => {
        let cardDiv = document.createElement("div");
        cardDiv.className = "card mb-3";

        let cardHeaderDiv = document.createElement("div");
        cardHeaderDiv.className = "card-header";
        cardHeaderDiv.textContent = event.name;

        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";
        cardBodyDiv.innerHTML = `<p class="card-text">Date: ${event.date}</p>
                                <p class="card-text">Time: ${event.time}</p>
                                <p class="card-text">Location: ${event.location}</p>
                                <p class="card-text">Description: ${event.description}</p>`;

        cardDiv.appendChild(cardHeaderDiv);
        cardDiv.appendChild(cardBodyDiv);
        eventContentsContainer.appendChild(cardDiv);
    });
}

let eventDetails = [
    {
        name: "Event 1 Name",
        date: "[Event 1 Date]",
        time: "[Event 1 Time]",
        location: "[Event 1 Location]",
        description: "[Event 1 Description]"
    },
    {
        name: "Event 2 Name",
        date: "[Event 2 Date]",
        time: "[Event 2 Time]",
        location: "[Event 2 Location]",
        description: "[Event 2 Description]"
    }
    // Add more events as needed
];

loadEventContents(eventDetails);

