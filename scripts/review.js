const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

let numSubmits = Number(window.localStorage.getItem("numSubmits-ls")) || 0;

numSubmits++;

localStorage.setItem("numSubmits-ls", numSubmits);

const submissionDisplay = document.querySelector(".submissions");
submissionDisplay.textContent = numSubmits;