// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params;
}

// Get the 'character' parameter
const params = getQueryParams();
const characterId = params.get('character');

if (characterId) {
    // Display the character ID in an element, if needed
    // Use HTMX to fetch character details based on the character ID
    document.getElementById('character-details').setAttribute('hx-get', `https://rickandmortyapi.com/api/character/${characterId}`);
    document.getElementById('character-details').setAttribute('hx-trigger', 'load');
}