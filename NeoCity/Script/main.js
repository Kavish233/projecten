// main.js
import { fetchCharacterByID } from './Api.js';
import { showCharacterPage, showStartPage, displayCharacter } from './ui.js';

async function handleFetchCharacter(inputID) {
    const id = parseInt(inputID);
    if (isNaN(id) || id < 0 || id > 52) {
        alert('Ongeldige karakter ID. Voer een nummer in tussen 0 en 52.');
        return;
    }

    try {
        const character = await fetchCharacterByID(id);
        displayCharacter(character);
        showCharacterPage();
    } catch (error) {
        alert(error.message);
        showStartPage();
    }
}

// Event listeners
document.getElementById('start_find_character').addEventListener('click', () => {
    const inputID = document.getElementById('start_karakterID').value;
    handleFetchCharacter(inputID);
});

document.getElementById('find_character').addEventListener('click', () => {
    const inputID = document.getElementById('karakterID').value;
    handleFetchCharacter(inputID);
});
