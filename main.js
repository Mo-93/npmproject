import queryString from 'query-string';

const cityListDiv = document.getElementById('city-list');
const prevLink = document.getElementById('prev-link');
const nextLink = document.getElementById('next-link');

let currentPage = 1;

function fetchCities(page) {
    const url = `https://demo-backendcities.azurewebsites.net/?cuid=hajIUIksk983LLP11112220&size=100&start=${page * 50}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Toon de steden in de div
            data.forEach(city => {
                const cityName = document.createElement('p');
                cityName.textContent = city.name;
                cityListDiv.appendChild(cityName);
            });
        })
        .catch(error => console.error('Fout bij het ophalen van steden:', error));
}

function updateCityList(page) {
    cityListDiv.innerHTML = ''; // Leeg de div voordat je nieuwe steden toevoegt
    fetchCities(page);
}

prevLink.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateCityList(currentPage);
    }
});

nextLink.addEventListener('click', () => {
    currentPage++;
    updateCityList(currentPage);
});

// Initial call to fetch cities on page load
updateCityList(currentPage);
