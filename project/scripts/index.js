const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let pets = [
    {
        name: "Fish",
        gender: "Male",
        age: "Young",
        size: "Medium",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Friendly", "Adventerous", "Funny"],
        houseTrained: "Yes",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Other cats, children",
        adoptionFee: "$75.00",
        imageUrl: "images/fish.jpg"
    },
    {
        name: "King",
        gender: "Male",
        age: "Kitten",
        size: "Small",
        color: "Gray",
        characteristics: ["Shy", "Friendly", "Playful"],
        houseTrained: "No",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Other cats, children, dogs",
        adoptionFee: "$100.00",
        imageUrl: "images/king.jpg"
    },
    {
        name: "Maxwell",
        gender: "Female",
        age: "Senior",
        size: "Large",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Friendly", "Adventerous", "Funny"],
        houseTrained: "Yes",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Other cats, children, dogs",
        adoptionFee: "$75.00",
        imageUrl: "images/maxwell.jpg"
    }
]

function petCard(petList) {
    const petCardsContainer = document.querySelector('#pet-cards');
    petCardsContainer.innerHTML = '';

    petList.forEach(pet => {

        const petCard = document.createElement('section');
        petCard.classList.add('pet-card-css');

        const petImage = document.createElement('img');
        petImage.setAttribute('src', pet.imageUrl);
        petImage.setAttribute('alt', pet.name);
        petImage.setAttribute('loading', 'lazy');
        petCard.appendChild(petImage);

        const petName = document.createElement('h2');
        petName.textContent = pet.name;
        petCard.appendChild(petName);

        const petInfo = document.createElement('p');
        petInfo.textContent = `${pet.size} - ${pet.age} - ${pet.gender} - ${pet.color}`;
        petCard.appendChild(petInfo);

        const petCharacter = document.createElement('p');
        petCharacter.textContent = `Characteristics: ${pet.characteristics}`;
        petCard.appendChild(petCharacter);

        const petHealth = document.createElement('p');
        petHealth.textContent = `Health: ${pet.health}`;
        petCard.appendChild(petHealth);

        const petTrained = document.createElement('p');
        petTrained.textContent = `House-Trained: ${pet.houseTrained}`;
        petCard.appendChild(petTrained);

        const petFee = document.createElement('p');
        petFee.textContent = `Adoption Fee: ${pet.adoptionFee}`;
        petCard.appendChild(petFee);


        const star = document.createElement('span');
        star.textContent = '⭐';
        star.classList.add('favorite-star');
        petCard.appendChild(star);

        if (isPetInFavorites(pet)) {
            star.classList.add('active');
        }

        star.addEventListener('click', () => {
            toggleFavorite(pet, star);
        });

        petCardsContainer.appendChild(petCard);
    });
}

function isPetInFavorites(pet) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(favPet => favPet.name === pet.name);
}

function toggleFavorite(pet, star) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const petIndex = favorites.findIndex(favPet => favPet.name === pet.name);

    if (petIndex === -1) {
        favorites.push(pet);
        star.classList.add('active');
    } else {
        favorites.splice(petIndex, 1);
        star.classList.remove('active');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}


function renderFavorites() {
    const petCardsContainer = document.querySelector('#pet-cards-fav');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    petCardsContainer.innerHTML = '';

    favorites.forEach(pet => {
        const petCard = document.createElement('section');
        petCard.classList.add('pet-card-css');

        const petImage = document.createElement('img');
        petImage.setAttribute('src', pet.imageUrl);
        petImage.setAttribute('alt', pet.name);
        petImage.setAttribute('loading', 'lazy');
        petCard.appendChild(petImage);

        const petName = document.createElement('h2');
        petName.textContent = pet.name;
        petCard.appendChild(petName);

        const petInfo = document.createElement('p');
        petInfo.textContent = `${pet.size} - ${pet.age} - ${pet.gender} - ${pet.color}`;
        petCard.appendChild(petInfo);

        const petCharacter = document.createElement('p');
        petCharacter.textContent = `Characteristics: ${pet.characteristics}`;
        petCard.appendChild(petCharacter);

        const petHealth = document.createElement('p');
        petHealth.textContent = `Health: ${pet.health}`;
        petCard.appendChild(petHealth);

        const petTrained = document.createElement('p');
        petTrained.textContent = `House-Trained: ${pet.houseTrained}`;
        petCard.appendChild(petTrained);

        const petFee = document.createElement('p');
        petFee.textContent = `Adoption Fee: ${pet.adoptionFee}`;
        petCard.appendChild(petFee);

        petCardsContainer.appendChild(petCard);
    });
}

petCard(pets);
renderFavorites();