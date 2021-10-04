// const typeColors = {
//     normal: "ADA480",
//     fighting: "ADA480",
//     flying: "ADA480",
//     poison: "ADA480",
//     ground: "ADA480",
//     rock: "ADA480",
//     bug: "ADA480",
//     ghost: "ADA480",
//     steel: "ADA480",
//     fire: "ADA480",
//     water: "ADA480",
//     grass: "ADA480",
//     electric: "ADA480",
//     psychic: "ADA480",
//     ice: "ADA480",
//     dragon: "ADA480",
//     dark: "ADA480",
//     fairy: "ADA480",
// }

const pokeCard = document.getElementsByClassName("poke-card");
const pokeType = document.getElementsByClassName("poke-type");


for (let i = 0; i < pokeCard.length; i++) {
    pokeCard[i].style.background = randomColour();
}

function randomColour() {
    let letters = '0123456789ABCDEF'.split('');
    let colour = '#';
    for (let i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}


// if (pokeType == "Normal"){
//     document.getElementById("poke-card").style.backgroundColor = "#ADA480"
//  } else if (pokeType == "Fighting") {
//      document.getElementById("poke-card").style.backgroundColor = "#C22F26"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Flying")) {
//      document.getElementById("poke-card").style.backgroundColor = "#B49AF6"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Poison")) {
//      document.getElementById("poke-card").style.backgroundColor = "#A43FA4"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Ground")) {
//      document.getElementById("poke-card").style.backgroundColor = "#DEBE63"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Rock")) {
//      document.getElementById("poke-card").style.backgroundColor = "#B49E38"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Bug")) {
//      document.getElementById("poke-card").style.backgroundColor = "#A8B531"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Ghost")) {
//      document.getElementById("poke-card").style.backgroundColor = "#B8B5CF"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Steel")) {
//      document.getElementById("poke-card").style.backgroundColor = "#B8B5CF"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Fire")) {
//      document.getElementById("poke-card").style.backgroundColor = "#F07D33"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Water")) {
//      document.getElementById("poke-card").style.backgroundColor = "#6D88F8"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Grass")) {
//      document.getElementById("poke-card").style.backgroundColor = "#81CB5B"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Electric")) {
//      document.getElementById("poke-card").style.backgroundColor = "#E9D436"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Psychic")) {
//      document.getElementById("poke-card").style.backgroundColor = "#FF598D"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Ice")) {
//      document.getElementById("poke-card").style.backgroundColor = "#9AD9DA"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Dragon")) {
//      document.getElementById("poke-card").style.backgroundColor = "#723EFC"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Dark")) {
//      document.getElementById("poke-card").style.backgroundColor = "#705749"
//  } else if (document.getElementById("poke-type").innerHTML.includes("Fairy")) {
//      document.getElementById("poke-card").style.backgroundColor = "#E1A4E1"
//  } else {
//      console.log("Fail")
//  }
