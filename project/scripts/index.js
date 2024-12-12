const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('header').classList.toggle('open');
});

let cats = [
    {
        name: "Fish",
        gender: "Male",
        age: "Young",
        size: "Medium",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Friendly", "Adventerous", "Funny"],
        houseTrained: "Yes",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Other cats, children.",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/fish.webp",
        id: "0001"
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
        goodWith: "Other cats, children, dogs.",
        adoptionFee: "$100.00",
        imageUrl: "images/cats/king.webp",
        id: "0002"
    },
    {
        name: "Maxwell",
        gender: "Female",
        age: "Adult",
        size: "Large",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Friendly", "Adventerous", "Funny"],
        houseTrained: "Yes",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Other cats, dogs",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/maxwell.webp",
        id: "0003"
    },
    {
        name: "Admiral Meowington",
        gender: "Male",
        age: "Senior",
        size: "Medium",
        color: "Hairless",
        characteristics: ["Quiet", "Brave", "Gentle"],
        houseTrained: "Yes",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Children, other cats, children.",
        adoptionFee: "$50.00",
        imageUrl: "images/cats/admiralmeowington.webp",
        id: "0004"
    },
    {
        name: "Sir Pounce-A-Lot",
        gender: "Male",
        age: "Adult",
        size: "Large",
        color: "White / Gray",
        characteristics: ["Gentle", "Athletic", "Affectionate", "Friendly", "Curious", "Playful", "Athletic"],
        houseTrained: "Yes",
        health: "Spayed/Neutered, vaccinations up to date",
        goodWith: "Other cats.",
        adoptionFee: "$95.00",
        imageUrl: "images/cats/sirpouncealot.webp",
        id: "0005"
    },
    {
        name: "Tiddy",
        gender: "Female",
        age: "Adult",
        size: "Medium",
        color: "Black",
        characteristics: ["Affectionate", "Playful", "Friendly"],
        houseTrained: "Yes",
        health: "Spayed/Neutered",
        goodWith: "Other cats.",
        adoptionFee: "$95.00",
        imageUrl: "images/cats/tiddy.webp",
        id: "0006"
    },
    {
        name: "Nacho",
        gender: "Female",
        age: "Young",
        size: "Medium",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Friendly", "Affectionate", "Gentle", "Playful", "Smart", "Brave", "Curious", "Funny", "Athletic", "Loves Kisses", "Brave"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other cats.",
        adoptionFee: "$95.00",
        imageUrl: "images/cats/nacho.webp",
        id: "0007"
    },
    {
        name: "Caesar",
        gender: "Male",
        age: "Adult",
        size: "Extra Large",
        color: "White / Black",
        characteristics: ["Hungry", "Food Motivated", "Cranky", "Loves Head Pats", "Angry", "Eats dogs"],
        houseTrained: "Yes",
        health: "Vaccinations up to date.",
        goodWith: "N/A",
        adoptionFee: "$100.00",
        imageUrl: "images/cats/Caesar.webp",
        id: "0008"
    },
    {
        name: "Bean",
        gender: "Female",
        age: "Adult",
        size: "Small",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Energetic", "Loud", "Zoomies at 3 am"],
        houseTrained: "No",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other cats, dogs, children",
        adoptionFee: "$2.00",
        imageUrl: "images/cats/Bean.webp",
        id: "0009"
    },
    {
        name: "Atomic Toaster",
        gender: "Female",
        age: "Adult",
        size: "Large",
        color: "Siamese (White / Black / Brown",
        characteristics: ["Friendly", "Affectionate", "Gentle", "Playful", "Smart", "Brave", "Curious", "Funny", "Athletic", "Loves Kisses", "Brave"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Children",
        adoptionFee: "$0.00",
        imageUrl: "images/cats/atomictoaster.webp",
        id: "0010"
    },
    {
        name: "Julie",
        gender: "Female",
        age: "Young",
        size: "Medium",
        color: "Gray / White",
        characteristics: ["Friendly", "Affectionate", "Playful", "Smart", "Brave", "Curious", "Funny", "Athletic", "Loves kisses", "Gentle"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other cats, children",
        adoptionFee: "$100.00",
        imageUrl: "images/cats/julie.webp",
        id: "0011"
    },
    {
        name: "Freckle",
        gender: "Female",
        age: "Senior",
        size: "Large",
        color: "Gold / White",
        characteristics: ["Gentle", "Playful", "Smart", "Brave", "Curious", "Funny", "Athletic", "Loves kisses", "Independent"],
        houseTrained: "Yes",
        health: "Spayed / neutered.",
        goodWith: "Dogs",
        adoptionFee: "$120.00",
        imageUrl: "images/cats/freckle.webp",
        id: "0012"
    },
    {
        name: "iPad 4",
        gender: "Male",
        age: "Adult",
        size: "Medium",
        color: "Tuxedo (Black / White)",
        characteristics: ["Smart", "Brave", "Curious", "Funny"],
        houseTrained: "Yes",
        health: "Vaccinations up to date.",
        goodWith: "Other cats",
        adoptionFee: "$274.00",
        imageUrl: "images/cats/ipad4.webp",
        id: "0013"
    },
    {
        name: "Fantastic Beast (Not a Tiger)",
        gender: "Male",
        age: "Adult",
        size: "Extra Large",
        color: "Orange / Black / White",
        characteristics: ["Big", "Not a Tiger", "Hungry"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Dogs",
        adoptionFee: "$500.00",
        imageUrl: "images/cats/fantasticbeast.webp",
        id: "0014"
    },
    {
        name: "Skull",
        gender: "Male",
        age: "Young",
        size: "Medium",
        color: "Black",
        characteristics: ["Funny", "Loves kisses", "Independent"],
        houseTrained: "No",
        health: "N/A",
        goodWith: "N/A",
        adoptionFee: "$50.00",
        imageUrl: "images/cats/skull.webp",
        id: "0015"
    },
    {
        name: "Itsy-Bitsy-Spider",
        gender: "Female",
        age: "Young",
        size: "Small",
        color: "Black",
        characteristics: ["Gentle", "Playful", "Smart", "Brave", "Curious", "Funny", "Athletic"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Children, other cats, dogs",
        adoptionFee: "$90.00",
        imageUrl: "images/cats/itsybitsyspider.webp",
        id: "0016"
    },
    {
        name: "The Great Catsby",
        gender: "Female",
        age: "Adult",
        size: "Large",
        color: "Orange",
        characteristics: ["Handsome", "Fancy", "Gentle", "Might drink your wine", "Prefers to be adopted with Gentleman"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "N/A",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/thegreatcatsby.webp",
        id: "0017"
    },
    {
        name: "Gentleman (The Great Catsby's Son)",
        gender: "Male",
        age: "Young",
        size: "Medium",
        color: "White / Orange",
        characteristics: ["Handsome", "Fancy", "Gentle", "Might eat your blue cheese", "Prefers to be adopted with The Great Catsby"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other cats.",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/catsbyson.webp",
        id: "0018"
    },
    {
        name: "Cloud",
        gender: "Male",
        age: "Adult",
        size: "Medium",
        color: "Snow White",
        characteristics: ["Independent", "Protective"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Children, dogs",
        adoptionFee: "$50.00",
        imageUrl: "images/cats/tom.webp",
        id: "0019"
    },
    {
        name: "BrightHeart",
        gender: "Female",
        age: "Adult",
        size: "Medium",
        color: "Orange / White",
        characteristics: ["Brave", "Protective", "Strong", "Independent"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other cats",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/brightheart.webp",
        id: "0020"
    },
    {
        name: "Majesty",
        gender: "Female",
        age: "Adult",
        size: "Medium",
        color: "Orange",
        characteristics: ["Majestic", "Fancy", "Caring", "Quiet"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other cats, children, dogs",
        adoptionFee: "$90.00",
        imageUrl: "images/cats/majesty.webp",
        id: "0021"
    },
    {
        name: "Purdy",
        gender: "Male",
        age: "Adult",
        size: "Medium",
        color: "Tabby (Brown / White / Black)",
        characteristics: ["Friendly", "Loves", "Affectionate", "Gentle", "Quiet"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Dogs",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/purdy.webp",
        id: "0022"
    },
    {
        name: "Danger Dave",
        gender: "Male",
        age: "Adult",
        size: "Large",
        color: "Black / White",
        characteristics: ["Quiet", "Affectionate", "Shy Initially", "Loud Purr", "Gentle"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "N/A",
        adoptionFee: "$75.00",
        imageUrl: "images/cats/dangerdave.webp",
        id: "0023"
    }
]

let dogs = [
    {
        name: "Nimbus",
        gender: "Male",
        age: "Young",
        size: "Medium",
        color: "Black / White",
        characteristics: ["Friendly", "Adventerous", "Funny"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other dogs, children",
        adoptionFee: "$175.00",
        imageUrl: "images/dogs/nimbus.jpg",
        id: "0024"
    },
    {
        name: "Nana",
        gender: "female",
        age: "Senior",
        size: "Extra Large",
        color: "Black",
        characteristics: ["Shy", "Friendly", "Playful", "Affectionate", "Big Bear", "Protective", "Elegant"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other dogs, children, cats.",
        adoptionFee: "$350.00",
        imageUrl: "images/dogs/nana.jpg",
        id: "0025"
    },
    {
        name: "Crayon",
        gender: "Female",
        age: "Adult",
        size: "Small",
        color: "Orange / White",
        characteristics: ["Affectionate", "Curious", "Friendly", "Playful"],
        houseTrained: "Yes",
        health: "Vaccinations up to date",
        goodWith: "N/A",
        adoptionFee: "$350.00",
        imageUrl: "images/dogs/crayon.jpg",
        id: "0026"
    },
    {
        name: "Linguini",
        gender: "Male",
        age: "Adult",
        size: "Extra Large",
        color: "Black / Brown",
        characteristics: ["Friendly", "Affectionate", "Curious", "Playful", "Funny"],
        houseTrained: "No",
        health: "N/A",
        goodWith: "Other dogs, cats",
        adoptionFee: "$175.00",
        imageUrl: "images/dogs/linguini.jpg",
        id: "0027"
    },
    {
        name: "Fungus",
        gender: "Male",
        age: "Adult",
        size: "Small",
        color: "Gold",
        characteristics: ["Loud", "Protective", "Energetic"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Cats",
        adoptionFee: "$300.00",
        imageUrl: "images/dogs/fungus.jpg",
        id: "0028"
    },
    {
        name: "Naughty Wilbur",
        gender: "Male",
        age: "Adult",
        size: "Small",
        color: "Peach",
        characteristics: ["Affectionate", "Curious", "Gentle", "Funny", "Friendly", "Loves", "Playful"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other dogs, children, cats",
        adoptionFee: "$500.00",
        imageUrl: "images/dogs/naughtywilbur.jpg",
        id: "0029"
    },
    {
        name: "Poppy",
        gender: "Female",
        age: "Adult",
        size: "Small",
        color: "Black / Brown",
        characteristics: ["Friendly", "Affectionate", "Curious", "Playful", "Funny"],
        houseTrained: "Yes",
        health: "Spayed / neutered.",
        goodWith: "Cats",
        adoptionFee: "$450.00",
        imageUrl: "images/dogs/poppy.jpg",
        id: "0030"
    },
    {
        name: "Mickey",
        gender: "Male",
        age: "Puppy",
        size: "Small",
        color: "Black / Brown",
        characteristics: ["Crazy", "Dumb as Bricks", "Ugly-Cute", "Will eat your clothes"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other dogs, children, Bean",
        adoptionFee: "$500.00",
        imageUrl: "images/dogs/mickey.jpg",
        id: "0031"
    },
    {
        name: "Thickin Nugget",
        gender: "Male",
        age: "Senior",
        size: "Extra Large",
        color: "Black / Brown",
        characteristics: ["Crazy", "Dumb as Bricks", "Ugly-Cute", "Will eat your clothes"],
        houseTrained: "Yes",
        health: "Vaccinations up to date, spayed / neutered.",
        goodWith: "Other dogs, children, Bean",
        adoptionFee: "$500.00",
        imageUrl: "images/dogs/thickinnugget.jpg",
        id: "0032"
    },
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


function renderFavorites() {
    const petCardsFavContainer = document.querySelector('#pet-cards-fav');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    petCardsFavContainer.innerHTML = '';


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

            petCardsFavContainer.appendChild(petFavCard);
        });
    }
}

const petTypeRadios = document.querySelectorAll('input[name="petType"]');
const petSelect = document.getElementById("pname");

function updatePetNames() {
    petSelect.innerHTML = '<option value="" disabled selected>Select a Pet You Wish to Adopt ...</option>';

    let petsToDisplay = [];

    const selectedPetType = [...petTypeRadios].find(radio => radio.checked)?.value;

    if (selectedPetType === "cat") {
        petsToDisplay = cats;
    } else if (selectedPetType === "dog") {
        petsToDisplay = dogs;
    }

    petsToDisplay.sort((a, b) => a.name.localeCompare(b.name));

    petsToDisplay.forEach(pet => {
        const option = document.createElement("option");
        option.value = pet.name;
        option.textContent = pet.name;
        petSelect.appendChild(option);
    });

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

if (window.location.pathname.includes('favorite.html')) {
    renderFavorites();
} else if (window.location.pathname.includes('cats.html')) {
    petCard(cats);
} else if (window.location.pathname.includes('dogs.html')) {
    petCard(dogs);
} else if (window.location.pathname.includes('adopt.html')) {
    updatePetNames();
} else {
    petCard(cats);
}