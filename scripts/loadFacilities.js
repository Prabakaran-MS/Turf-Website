let facilities = document.getElementById("facilities");

function loadFacilities(contents){
const div1 = document.createElement('div');
div1.className ='my-5';
const div2 = document.createElement('div');
div2.className ='p-5 text-center bg-body-tertiary';
const div3 = document.createElement('div');
div3.className ='container py-5';
const h1 = document.createElement('h1');
h1.className ='text-body-emphasis';
h1.textContent = "Facilities";
div3.appendChild(h1);

contents.forEach(content => {
    const h2 = document.createElement('h2');
    h2.textContent= content.title;

    const p = document.createElement('p');
    p.className = 'col-lg-8 mx-auto lead';
    p.textContent= content.body;

    div3.appendChild(h2);
    div3.appendChild(p);
});

div2.appendChild(div3);
div1.appendChild(div2);
facilities.appendChild(div1);
}

contents = [{
    title:"Natural Grass Excellence",
    body:`Immerse yourself in the authentic thrill of the game on our meticulously maintained natural grass turf. Siva Sports Hub takes pride in offering an unrivaled sporting experience that ensures every match is played on premium-quality turf.`
},{
    title:"State-of-the-Art Amenities",
    body:`Our facilities are designed to cater to football enthusiasts of all ages and skill levels. From well-equipped changing rooms to modern restroom facilities, we've thoughtfully crafted an environment that prioritizes your comfort and convenience.`
}];

loadFacilities(contents)