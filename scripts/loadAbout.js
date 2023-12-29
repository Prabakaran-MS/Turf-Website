let about = document.getElementById("about");

function loadAbout(contents){
const div1 = document.createElement('div');
div1.className ='my-5';
const div2 = document.createElement('div');
div2.className ='p-5 text-center bg-body-tertiary';
const div3 = document.createElement('div');
div3.className ='container py-5';
const h1 = document.createElement('h1');
h1.className ='text-body-emphasis';
h1.textContent = "About Us";
div3.appendChild(h1);

contents.forEach(content => {
    const p = document.createElement('p');
    p.className = 'col-lg-8 mx-auto lead';
    p.textContent= content;

    div3.appendChild(p);
});

div2.appendChild(div3);
div1.appendChild(div2);
about.appendChild(div1);
}

contents = [`Welcome to Siva Sports Hub, where passion seamlessly intertwines with play on our exceptional football turf.
At SivaPlay, we pride ourselves on delivering an unparalleled sporting experience on natural grass,
ensuring an authentic and exhilarating game every time you step onto the field. Our cutting-edge facilities
are tailored to meet the needs of football enthusiasts of all ages and skill levels.
`,
`Whether you're a seasoned player honing your skills or a beginner taking your first steps onto the pitch,
Siva Sports Hub provides the ideal environment for fun, competition, and community. Immerse yourself in the
spirit of the game within a dynamic space meticulously designed to elevate your football experience.
`,
`Join us for unforgettable matches, engaging training sessions, and exciting events
that celebrate the love for football. At Siva Sports Hub, we go beyond providing a playing field
– we create a vibrant hub where the passion for football truly comes alive. Come and be a part of our thriving
community, where every kick, goal, and celebration adds to the legacy of Siva Sports Hub.
`];

loadAbout(contents)