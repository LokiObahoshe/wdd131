const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Casper Wyoming Temple",
        location: "Casper, Wyoming",
        dedicated: "2021, October, 9",
        area: 9950,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/casper-wyoming-temple/casper-wyoming-temple-51916-main.jpg"
    },
    {
        templeName: "Porto Alegre Brazil Temple",
        location: "Porto Alegre, Brazil",
        dedicated: "1998, May, 2",
        area: 13325,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267-main.jpg"
    },
    {
        templeName: "Snowflake Arizona Temple",
        location: "Snowflake, Arizona",
        dedicated: "2000, September, 23",
        area: 18621,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/snowflake-arizona-temple/snowflake-arizona-temple-46560-main.jpg"
    },
];


// This const calls to an ID called "temple-cards" in the HTML and names
// the variable "templeCardsContainer"
function templeCard(templesList) {
    const templeCardsContainer = document.querySelector('#temple-cards');
    templeCardsContainer.innerHTML = '';

    templesList.forEach(temple => {

        // This const creates a div element along with
        // a class called "temple-card-css"
        const templeCard = document.createElement('section');
        templeCard.classList.add('temple-card-css');

        // This const creates an <h2> element, adds the temple name
        // as textContent, and appends that <h2> to the templeCard
        const templeName = document.createElement('h2');
        templeName.textContent = temple.templeName;
        templeCard.appendChild(templeName);

        // This const creates a <p> element, adds the temple location
        // as textContent, and appends that <p> to the templeCard
        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        // This const creates a <p> element, adds the temple dedication
        // as textContent, and appends that <p> to the templeCard
        const templeDedicated = document.createElement('p');
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
        templeCard.appendChild(templeDedicated);

        // This const creates a <p> element, adds the temple area
        // as textContent, and appends that <p> to the templeCard as sq ft
        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} sq ft`;
        templeCard.appendChild(templeArea);

        // This const creates an <img> element, then sets the "src" and
        // "alt" attributes using the imageURL and templeName children,
        // sets a lazy load to those images, and appends those <img>
        // elements to the templeCard
        const templeImage = document.createElement('img');
        templeImage.setAttribute('src', temple.imageUrl);
        templeImage.setAttribute('alt', temple.templeName);
        templeImage.setAttribute('loading', 'lazy');
        templeImage.setAttribute('width', '400');
        templeImage.setAttribute('height', '250');
        templeCard.appendChild(templeImage);

        // The templeCardContainer const created before appends
        // the templeCard, which now has all the consts above
        // within it
        templeCardsContainer.appendChild(templeCard);
    });
}

const oldLink = document.querySelector("#oldfilter");
const homeLink = document.querySelector("#homefilter");
const newLink = document.querySelector("#newfilter");
const largeLink = document.querySelector("#largefilter");
const smallLink = document.querySelector("#smallfilter");

function removeActiveClass() {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.classList.remove("active");
    });
}

homeLink.addEventListener("click", (event) => {
    removeActiveClass();
    homeLink.classList.add("active");

    event.preventDefault();

    templeCard(temples);
});

oldLink.addEventListener("click", () => {
    removeActiveClass();
    oldLink.classList.add("active");

    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    templeCard(oldTemples);
});

newLink.addEventListener("click", () => {
    removeActiveClass();
    newLink.classList.add("active");

    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    templeCard(newTemples);
});

largeLink.addEventListener("click", () => {
    removeActiveClass();
    largeLink.classList.add("active");

    const largeTemples = temples.filter(temple => {
        const area = parseInt(temple.area);
        return area > 90000;
    });
    templeCard(largeTemples);
});

smallLink.addEventListener("click", () => {
    removeActiveClass();
    smallLink.classList.add("active");

    const smallTemples = temples.filter(temple => {
        const area = parseInt(temple.area);
        return area > 10000;
    });
    templeCard(smallTemples);
});

templeCard(temples);