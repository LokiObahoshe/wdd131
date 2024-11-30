function changeJoke() {
    document.getElementById("joke").innerHTML = "Because she kept running away from the ball!";
}

function changeEmotion(emotion) {
    document.getElementById('emotions').src = `images/${emotion}.png`;
}

function changeColor(color) {
    document.getElementById('css').style.color = color;
}

function hideElement() {
    document.getElementById('hide').style.display = 'none';
}

function showElement() {
    document.getElementById('hide').style.display = 'block';
}

function math() {
    const math = 5 + 6;
    document.getElementById('math').innerHTML = `5 + 6 = ${math}`;
}

function variables() {
    let x = 7
    let y = 10
    let z = x + y

    document.getElementById('variable').innerHTML = `The value of z is ${z}`;
}

function strings() {
    let text1 = "Hello.";
    let text2 = "you're weird.";
    let text3 = "Goodbye."

    document.getElementById('string').innerHTML = `${text1} ${text2} ${text3}`;
}

function arrays() {
    const pokemon = ["Magmar", "Inkay", "Charizard", "Butterfree"];

    document.getElementById("pokemonarray").innerHTML = pokemon[1];
}

function objects() {
    const pokemon = {
        name: "Pikachu",
        type: "Electric",
        color: "Yellow",
        trainer: "Ash Ketchum"

    };

    document.getElementById("object").innerHTML = `Pokemon: ${pokemon.name}<br>Type: ${pokemon.type}<br>Color: ${pokemon.color}<br>Trainer: ${pokemon.trainer}`;
}

math();
variables();
strings();
arrays();
objects();