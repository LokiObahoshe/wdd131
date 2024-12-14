//This grabs the pet informating by importing
import { cats, dogs } from './pets.js';

/*********************** Modified Date ***********************/

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

/*********************** Hamburger Menu ***********************/

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('header').classList.toggle('open');
});

/*********************** The Pet Cards ***********************/

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
        petCharacter.textContent = `Characteristics: ${pet.characteristics.join(', ')}`;
        petCard.appendChild(petCharacter);

        const petHealth = document.createElement('p');
        petHealth.textContent = `Health: ${pet.health}`;
        petCard.appendChild(petHealth);

        const petTrained = document.createElement('p');
        petTrained.textContent = `House-Trained: ${pet.houseTrained}`;
        petCard.appendChild(petTrained);

        const petGoodWith = document.createElement('p');
        petGoodWith.textContent = `Good in a Home With: ${pet.goodWith}`;
        petCard.appendChild(petGoodWith);

        const petFee = document.createElement('p');
        petFee.textContent = `Adoption Fee: ${pet.adoptionFee}`;
        petCard.appendChild(petFee);

        const petId = document.createElement('p');
        petId.textContent = `Adoption Number: ${pet.id}`;
        petCard.appendChild(petId);

        // This creates the star button so users can
        // save pets they like or wish to adopt
        // in the future
        const star = document.createElement('span');
        star.classList.add('favoritecss');
        star.textContent = '☆';
        star.classList.add('favorite-star');
        petCard.appendChild(star);

        if (isPetInFavorites(pet)) {
            star.textContent = '★';
            star.style.color = 'yellow';
        }

        star.addEventListener('click', () => {
            toggleFavorite(pet, star);
        });

        petCardsContainer.appendChild(petCard);
    });
}

/*********************** Favorite Pets ***********************/

function isPetInFavorites(pet) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(favPet => favPet.name === pet.name);
}

function toggleFavorite(pet, star) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const petIndex = favorites.findIndex(favPet => favPet.name === pet.name);

    if (petIndex === -1) {
        favorites.push(pet);
        star.textContent = '★';
        star.classList.add('activestar');
        star.style.color = 'yellow';
    } else {
        favorites.splice(petIndex, 1);
        star.textContent = '☆';
        star.style.color = '#F3FFEE';
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Render the favorite pets on the "Your Favorites" page
function renderFavorites() {
    const petCardsFavContainer = document.querySelector('#pet-cards-fav');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    petCardsFavContainer.innerHTML = '';

    // This is to make sure there is a
    // message for when the list is empty
    if (favorites.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.classList.add('emptymessagecss');
        emptyMessage.textContent = 'Your favorites list is empty. Add some pets to your favorites!';
        petCardsFavContainer.appendChild(emptyMessage);
    } else {
        favorites.forEach(pet => {
            const petFavCard = document.createElement('section');
            petFavCard.classList.add('pet-card-css');

            const petImage = document.createElement('img');
            petImage.setAttribute('src', pet.imageUrl);
            petImage.setAttribute('alt', pet.name);
            petImage.setAttribute('loading', 'lazy');
            petFavCard.appendChild(petImage);

            const petName = document.createElement('h2');
            petName.textContent = pet.name;
            petFavCard.appendChild(petName);

            const petInfo = document.createElement('p');
            petInfo.textContent = `${pet.size} - ${pet.age} - ${pet.gender} - ${pet.color}`;
            petFavCard.appendChild(petInfo);

            const petCharacter = document.createElement('p');
            petCharacter.textContent = `Characteristics: ${pet.characteristics.join(', ')}`;
            petFavCard.appendChild(petCharacter);

            const petHealth = document.createElement('p');
            petHealth.textContent = `Health: ${pet.health}`;
            petFavCard.appendChild(petHealth);

            const petTrained = document.createElement('p');
            petTrained.textContent = `House-Trained: ${pet.houseTrained}`;
            petFavCard.appendChild(petTrained);

            const petFee = document.createElement('p');
            petFee.textContent = `Adoption Fee: ${pet.adoptionFee}`;
            petFavCard.appendChild(petFee);

            const petId = document.createElement('p');
            petId.textContent = `Adoption Number: ${pet.id}`;
            petFavCard.appendChild(petId);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove from Favorites';
            removeButton.classList.add('removefavoritebutton');
            petFavCard.appendChild(removeButton);

            removeButton.addEventListener('click', () => {
                removeFavorite(pet, petFavCard);
            });

            petCardsFavContainer.appendChild(petFavCard);
        });
    }
}

/*********************** Remove Favorite Pets ***********************/

function removeFavorite(pet, petCard) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const petIndex = favorites.findIndex(favPet => favPet.name === pet.name);

    if (petIndex !== -1) {
        favorites.splice(petIndex, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        petCard.remove();

        renderFavorites();
    }
}

/*********************** Update Pet Names for Form Dropdown ***********************/

const petTypeRadios = document.querySelectorAll('input[name="petType"]');
const petSelect = document.getElementById("pname");

function updatePetNames() {
    petSelect.innerHTML = '<option value="" disabled selected>Select a Pet You Wish to Adopt ...</option>';

    let petsToDisplay = [];

    const selectedPetType = [...petTypeRadios].find(radio => radio.checked)?.value;

    // This is what changes the dropdown depending
    // on what the user chose (cat or dog)
    if (selectedPetType === "cat") {
        petsToDisplay = cats;
    } else if (selectedPetType === "dog") {
        petsToDisplay = dogs;
    }

    // This organizes the list alphabetically
    petsToDisplay.sort((a, b) => a.name.localeCompare(b.name));

    petsToDisplay.forEach(pet => {
        const option = document.createElement("option");
        option.value = pet.name;
        option.textContent = pet.name;
        petSelect.appendChild(option);
    });

    // This is for the pet ID in the Form when
    // a pet is chosen
    petSelect.addEventListener("change", function () {
        const selectedPetName = petSelect.value;
        const selectedPet = petsToDisplay.find(pet => pet.name === selectedPetName);

        if (selectedPet) {
            document.getElementById("petid").value = selectedPet.id;
        } else {
            document.getElementById("petid").value = 'An error occured.';
        }
    });

    petSelect.addEventListener("change", function () {
        const selectedPetName = petSelect.value;
        const selectedPet = petsToDisplay.find(pet => pet.name === selectedPetName);

        if (selectedPet) {
            document.getElementById("petfee").value = selectedPet.adoptionFee;
        } else {
            document.getElementById("petfee").value = 'An error occured.';
        }
    });
}

petTypeRadios.forEach(radio => {
    radio.addEventListener("change", updatePetNames);
});

/*********************** Calling The Functions ***********************/

if (window.location.pathname.includes('favorite.html')) {
    renderFavorites();
} else if (window.location.pathname.includes('cats.html')) {
    petCard(cats);
} else if (window.location.pathname.includes('dogs.html')) {
    petCard(dogs);
} else if (window.location.pathname.includes('adopt.html')) {
    updatePetNames();
}