// Function to check if a pet is in the favorites list
function isPetInFavorites(pet) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(favPet => favPet.name === pet.name);
}

// Function to toggle the favorite status of a pet
function toggleFavorite(pet, star) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the pet is already a favorite
    const petIndex = favorites.findIndex(favPet => favPet.name === pet.name);

    if (petIndex === -1) {
        // Pet is not in favorites, add it
        favorites.push(pet);
        star.classList.add('active'); // Highlight the star
    } else {
        // Pet is already in favorites, remove it
        favorites.splice(petIndex, 1);
        star.classList.remove('active'); // Remove the highlight
    }

    // Update the favorites in localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to render the favorite pets
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

renderFavorites(pets);