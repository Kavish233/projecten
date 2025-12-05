// api.js
export async function fetchCharacterByID(id) {
    const url = `https://thronesapi.com/api/v2/Characters/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Karakter niet gevonden');
            } else {
                throw new Error('Netwerkfout');
            }
        }
        const character = await response.json();
        return character;
    } catch (error) {
        console.error('API Error:', error);
        throw error; // geef de error door aan de caller
    }
}
