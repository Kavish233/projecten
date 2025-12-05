// ui.js
export const startPage = document.getElementById('startPage');
export const characterPage = document.getElementById('characterPage');

export function showCharacterPage() {
    startPage.style.display = 'none';
    characterPage.style.display = 'grid';
}

export function showStartPage() {
    startPage.style.display = 'grid';
    characterPage.style.display = 'none';
}

export function displayCharacter(character) {
    document.getElementById('karakterNaam').textContent = character.fullName;
    document.getElementById('profiel').src = character.imageUrl;
    document.getElementById('FirstName').textContent = `Voornaam: ${character.firstName}`;
    document.getElementById('LastName').textContent = `Achternaam: ${character.lastName}`;
    document.getElementById('fullName').textContent = `Volledige naam: ${character.fullName}`;
    document.getElementById('title').textContent = `Titel: ${character.title}`;
    document.getElementById('family').textContent = `Familie: ${character.family}`;
}
