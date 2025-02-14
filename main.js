const jsonData =  [
    {"id": 1861387, "name": "Ishikawa-ken", "country": "JP", "coord": {"lon": 136.770493, "lat": 36.77145}},
    {"id": 1857578, "name": "Matoba", "country": "JP", "coord": {"lon": 133.949997, "lat": 34.25}},
    {"id": 1299298, "name": "Pya", "country": "MM", "coord": {"lon": 95.599998, "lat": 21.51667}},
    {"id": 3256023, "name": "Kalanac", "country": "BA", "coord": {"lon": 18.78389, "lat": 44.86861}},
    {"id": 2921044, "name": "Federal Republic of Germany", "country": "DE", "coord": {"lon": 10.5, "lat": 51.5}},
    {"id": 2861876, "name": "Land Nordrhein-Westfalen", "country": "DE", "coord": {"lon": 7, "lat": 51.5}},
    {"id": 802899, "name": "Mutaykutan", "country": "RU", "coord": {"lon": 47.660641, "lat": 42.818859}},
    {"id": 523523, "name": "Nalchik", "country": "RU", "coord": {"lon": 43.618889, "lat": 43.498058}},
    {"id": 546448, "name": "Kolganov", "country": "RU", "coord": {"lon": 40.066669, "lat": 44.366669}},
    {"id": 500023, "name": "Rybatskiy", "country": "RU", "coord": {"lon": 44.166389, "lat": 44.799171}},
    {"id": 2207349, "name": "Bellara", "country": "AU", "coord": {"lon": 153.149597, "lat": -27.063919}},
    {"id": 7870412, "name": "Bartlett", "country": "ZA", "coord": {"lon": 28.25263, "lat": -26.17061}},
    {"id": 961935, "name": "Rietfontein", "country": "ZA", "coord": {"lon": 29.200001, "lat": -25.5}},
    {"id": 3371200, "name": "Hardap", "country": "NA", "coord": {"lon": 17.25, "lat": -24.5}},
    {"id": 1016666, "name": "Botswana", "country": "ZA", "coord": {"lon": 30.533331, "lat": -24.33333}},
    {"id": 3858204, "name": "El Destierro", "country": "AR", "coord": {"lon": -62.47662, "lat": -24.1}},
    {"id": 4070245, "name": "Jones Crossroads", "country": "US", "coord": {"lon": -85.484657, "lat": 31.21073}},
    {"id": 4344544, "name": "Vernon Parish", "country": "US", "coord": {"lon": -93.183502, "lat": 31.11685}},
    {"id": 4215307, "name": "Pennick", "country": "US", "coord": {"lon": -81.55899, "lat": 31.313}},
    {"id": 5285039, "name": "Black Bear Spring", "country": "US", "coord": {"lon": -110.288139, "lat": 31.386209}},
    {"id": 4673179, "name": "Bee House", "country": "US", "coord": {"lon": -98.081139, "lat": 31.40266}},
    {"id": 6078447, "name": "Morden", "country": "CA", "coord": {"lon": -98.101357, "lat": 49.191898}},
    {"id": 2201316, "name": "Nasirotu", "country": "FJ", "coord": {"lon": 178.25, "lat": -18.033331}},
    {"id": 1938756, "name": "Sisali", "country": "ID", "coord": {"lon": 124.531387, "lat": -9.19167}},
    {"id": 2009359, "name": "Puntan", "country": "ID", "coord": {"lon": 110.553329, "lat": -7.51944}},
    {"id": 2566086, "name": "Tsiémé-Mandiélé", "country": "CG", "coord": {"lon": 15.2875, "lat": -4.22694}},
    {"id": 154733, "name": "Masama", "country": "TZ", "coord": {"lon": 37.183331, "lat": -3.23333}},
    {"id": 1630349, "name": "Purukcahu", "country": "ID", "coord": {"lon": 114.583328, "lat": -0.58333}},
    {"id": 2224928, "name": "Néméyong II", "country": "CM", "coord": {"lon": 13.5, "lat": 2.91667}},
    {"id": 6716279, "name": "Pondok Genteng", "country": "ID", "coord": {"lon": 99.0709, "lat": 3.2245}},
    {"id": 2384618, "name": "Mbongoté", "country": "CF", "coord": {"lon": 18.283331, "lat": 4.25}},
    {"id": 378867, "name": "Amiling", "country": "SS", "coord": {"lon": 32.355831, "lat": 4.19417}},
    {"id": 2230362, "name": "Kélkoto", "country": "CM", "coord": {"lon": 11.16667, "lat": 4.43333}},
    {"id": 343846, "name": "Angetu", "country": "ET", "coord": {"lon": 39.48333, "lat": 6.33333}},
    {"id": 370366, "name": "Massa", "country": "SD", "coord": {"lon": 29.466669, "lat": 10.98333}},
    {"id": 365618, "name": "Tumko", "country": "SD", "coord": {"lon": 24.6, "lat": 12.01667}},
    {"id": 524894, "name": "Moskva", "country": "RU", "coord": {"lon": 37.606667, "lat": 55.761665}},
    {"id": 1861060, "name": "Japan", "country": "JP", "coord": {"lon": 139.753098, "lat": 35.68536}},
    {"id": 2130037, "name": "Hokkaidō", "country": "JP", "coord": {"lon": 141.346603, "lat": 43.06451}},
    {"id": 6199126, "name": "Sanggrahan", "country": "ID", "coord": {"lon": 110.246109, "lat": -7.46056}},
    {"id": 6388445, "name": "Karangmangle", "country": "ID", "coord": {"lon": 109.0075, "lat": -7.43028}},
    {"id": 494806, "name": "Sheremetyevskiy", "country": "RU", "coord": {"lon": 37.491112, "lat": 55.98}},
    {"id": 467104, "name": "Yershovo", "country": "RU", "coord": {"lon": 36.858055, "lat": 55.771111}},
    {"id": 462352, "name": "Znamenka", "country": "RU", "coord": {"lon": 35.981392, "lat": 52.896671}},
    {"id": 2267057, "name": "Lisbon", "country": "PT", "coord": {"lon": -9.13333, "lat": 38.716}}

]

let currentPage = 0;
const citiesPerPage = 2; // Reduced for demonstration purposes
const totalCities = jsonData.length;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prev').addEventListener('click', (event) => {
        event.preventDefault();
        changePage(-1);
    });
    document.getElementById('next').addEventListener('click', (event) => {
        event.preventDefault();
        changePage(1);
    });
    fetchCities(currentPage); // Initial fetch
    updateNavigation(); // Initialize navigation visibility
});

function fetchCities(page) {
    const start = page * citiesPerPage;
    const end = start + citiesPerPage;
    const cities = jsonData.slice(start, end);
    displayCities(cities);
}

function displayCities(cities) {
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = '';
    if (cities.length > 0) {
        cities.forEach(city => {
            const cityElement = document.createElement('div');
            cityElement.textContent = `${city.name}, ${city.country} (Lon: ${city.coord.lon}, Lat: ${city.coord.lat})`;
            cityList.appendChild(cityElement);
        });
    } else {
        cityList.textContent = 'No cities to display';
    }
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < getTotalPages()) {
        currentPage = newPage;
        fetchCities(currentPage);
        updateNavigation();
    }
}

function updateNavigation() {
    const prevLink = document.getElementById('prev');
    const nextLink = document.getElementById('next');

    if (currentPage === 0) {
        prevLink.classList.add('prev');
    } else {
        prevLink.classList.remove('prev');
    }

    if (currentPage >= getTotalPages() - 1) {
        nextLink.classList.add('next');
    } else {
        nextLink.classList.remove('next');
    }
}

function getTotalPages() {
    return Math.ceil(totalCities / citiesPerPage);
}

