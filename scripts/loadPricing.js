let pricingContent = document.getElementById("pricingContent");


function loadPricing(contents) {

    contents.forEach(content => {
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.className = "card mb-4 rounded-3 shadow-sm";

        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header py-3";
        cardHeader.innerHTML = `<h4 class="my-0 fw-normal">${content.title}</h4>`;

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.innerHTML = `<h1 class="card-title pricing-card-title">${content.body}</h1>`;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        col.appendChild(card);
        pricingContent.appendChild(col);
    });
}

let contents = [
    {
        title: "Weekend Slot Price",
        body: "2500"
    },
    {
        title: "Weekday Slot Price",
        body: "2000"
    },
    {
        title: "Football Coaching Price<small class='text-body-secondary fw-light'>/Person</small>",
        body: "2500<small class='text-body-secondary fw-light'>/mo</small>"
    }
];

loadPricing(contents);
