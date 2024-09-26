const apiKey = 'your_openweathermap_api_key_here'; // Remove this if only using dummy data.

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.toLowerCase();
    const dummyData = getDummyData(city);

    if (dummyData) {
        displayWeatherData(dummyData);
        loadMap(dummyData.coord.lat, dummyData.coord.lon);
    } else {
        getWeather(city); // Call the API if the state isn't in the dummy data
    }
});

// Dummy state weather data for all 28 states in India
function getDummyData(city) {
    const states = {
        'andhra pradesh': {
            name: 'Andhra Pradesh',
            main: { temp: 35, humidity: 65 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 12 },
            coord: { lat: 15.9129, lon: 79.7400 }
        },
        'arunachal pradesh': {
            name: 'Arunachal Pradesh',
            main: { temp: 20, humidity: 75 },
            weather: [{ main: 'Clouds', description: 'Cloudy', icon: '03d' }],
            wind: { speed: 10 },
            coord: { lat: 28.2180, lon: 94.7278 }
        },
        'assam': {
            name: 'Assam',
            main: { temp: 28, humidity: 85 },
            weather: [{ main: 'Thunderstorm', description: 'Stormy', icon: '11d' }],
            wind: { speed: 18 },
            coord: { lat: 26.2006, lon: 92.9376 }
        },
        'bihar': {
            name: 'Bihar',
            main: { temp: 32, humidity: 70 },
            weather: [{ main: 'Clouds', description: 'Cloudy', icon: '03d' }],
            wind: { speed: 14 },
            coord: { lat: 25.0961, lon: 85.3131 }
        },
        'chhattisgarh': {
            name: 'Chhattisgarh',
            main: { temp: 33, humidity: 60 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 10 },
            coord: { lat: 21.2787, lon: 81.8661 }
        },
        'goa': {
            name: 'Goa',
            main: { temp: 29, humidity: 80 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 8 },
            coord: { lat: 15.2993, lon: 74.1240 }
        },
        'gujarat': {
            name: 'Gujarat',
            main: { temp: 36, humidity: 55 },
            weather: [{ main: 'Clear', description: 'Hot and Sunny', icon: '01d' }],
            wind: { speed: 15 },
            coord: { lat: 22.2587, lon: 71.1924 }
        },
        'haryana': {
            name: 'Haryana',
            main: { temp: 31, humidity: 62 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 13 },
            coord: { lat: 29.0588, lon: 76.0856 }
        },
        'himachal pradesh': {
            name: 'Himachal Pradesh',
            main: { temp: 20, humidity: 55 },
            weather: [{ main: 'Clouds', description: 'Partly Cloudy', icon: '03d' }],
            wind: { speed: 9 },
            coord: { lat: 31.1048, lon: 77.1734 }
        },
        'jharkhand': {
            name: 'Jharkhand',
            main: { temp: 34, humidity: 70 },
            weather: [{ main: 'Clear', description: 'Hot', icon: '01d' }],
            wind: { speed: 12 },
            coord: { lat: 23.6102, lon: 85.2799 }
        },
        'karnataka': {
            name: 'Karnataka',
            main: { temp: 28, humidity: 60 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 10 },
            coord: { lat: 15.3173, lon: 75.7139 }
        },
        'kerala': {
            name: 'Kerala',
            main: { temp: 30, humidity: 85 },
            weather: [{ main: 'Thunderstorm', description: 'Heavy Rain', icon: '11d' }],
            wind: { speed: 14 },
            coord: { lat: 10.8505, lon: 76.2711 }
        },
        'madhya pradesh': {
            name: 'Madhya Pradesh',
            main: { temp: 33, humidity: 65 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 14 },
            coord: { lat: 22.9734, lon: 78.6569 }
        },
        'maharashtra': {
            name: 'Maharashtra',
            main: { temp: 32, humidity: 70 },
            weather: [{ main: 'Clouds', description: 'Cloudy', icon: '03d' }],
            wind: { speed: 15 },
            coord: { lat: 19.7515, lon: 75.7139 }
        },
        'manipur': {
            name: 'Manipur',
            main: { temp: 26, humidity: 85 },
            weather: [{ main: 'Thunderstorm', description: 'Rainy', icon: '11d' }],
            wind: { speed: 10 },
            coord: { lat: 24.6637, lon: 93.9063 }
        },
        'meghalaya': {
            name: 'Meghalaya',
            main: { temp: 23, humidity: 90 },
            weather: [{ main: 'Clouds', description: 'Overcast', icon: '03d' }],
            wind: { speed: 8 },
            coord: { lat: 25.4670, lon: 91.3662 }
        },
        'mizoram': {
            name: 'Mizoram',
            main: { temp: 25, humidity: 80 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 9 },
            coord: { lat: 23.1645, lon: 92.9376 }
        },
        'nagaland': {
            name: 'Nagaland',
            main: { temp: 24, humidity: 85 },
            weather: [{ main: 'Thunderstorm', description: 'Rainy', icon: '11d' }],
            wind: { speed: 10 },
            coord: { lat: 26.1584, lon: 94.5624 }
        },
        'odisha': {
            name: 'Odisha',
            main: { temp: 34, humidity: 75 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 13 },
            coord: { lat: 20.9517, lon: 85.0985 }
        },
        'punjab': {
            name: 'Punjab',
            main: { temp: 29, humidity: 60 },
            weather: [{ main: 'Clear', description: 'Clear Skies', icon: '01d' }],
            wind: { speed: 12 },
            coord: { lat: 31.1471, lon: 75.3412 }
        },
        'rajasthan': {
            name: 'Rajasthan',
            main: { temp: 38, humidity: 55 },
            weather: [{ main: 'Clear', description: 'Very Hot', icon: '01d' }],
            wind: { speed: 14 },
            coord: { lat: 27.0238, lon: 74.2179 }
        },
        'sikkim': {
            name: 'Sikkim',
            main: { temp: 20, humidity: 70 },
            weather: [{ main: 'Clouds', description: 'Cloudy', icon: '03d' }],
            wind: { speed: 7 },
            coord: { lat: 27.5320, lon: 88.5122 }
        },
        'tamil nadu': {
            name: 'Tamil Nadu',
            main: { temp: 36, humidity: 70 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 15 },
            coord: { lat: 11.1271, lon: 78.6569 }
        },
        'telangana': {
            name: 'Telangana',
            main: { temp: 35, humidity: 65 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 12 },
            coord: { lat: 18.1124, lon: 79.0193 }
        },
        'tripura': {
            name: 'Tripura',
            main: { temp: 28, humidity: 80 },
            weather: [{ main: 'Thunderstorm', description: 'Stormy', icon: '11d' }],
            wind: { speed: 14 },
            coord: { lat: 23.9408, lon: 91.9882 }
        },
        'uttar pradesh': {
            name: 'Uttar Pradesh',
            main: { temp: 30, humidity: 65 },
            weather: [{ main: 'Clear', description: 'Sunny', icon: '01d' }],
            wind: { speed: 13 },
            coord: { lat: 26.8467, lon: 80.9462 }
        },
        'uttarakhand': {
            name: 'Uttarakhand',
            main: { temp: 25, humidity: 60 },
            weather: [{ main: 'Clouds', description: 'Cloudy', icon: '03d' }],
            wind: { speed: 10 },
            coord: { lat: 30.0668, lon: 79.0193 }
        },
        'west bengal': {
            name: 'West Bengal',
            main: { temp: 33, humidity: 85 },
            weather: [{ main: 'Thunderstorm', description: 'Rainy', icon: '11d' }],
            wind: { speed: 15 },
            coord: { lat: 22.9868, lon: 87.8550 }
        }
    };

    return states[city] || null;
}

// Fetch real data from OpenWeatherMap API
function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
            loadMap(data.coord.lat, data.coord.lon);
        })
        .catch(() => {
            alert('City not found or an error occurred!');
        });
}

// Display weather data
function displayWeatherData(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Change background based on weather condition
    switch (data.weather[0].main) {
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvmvfQGnZOPZ0s2dgGwYzFN_JxvNGCdwcxQ&s')";
            break;
        case 'Clear':
            document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg')";
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0sKR5dx_Y0aodiBZ4Ls2ZDxT5JLCZhbm8Q&s')";
            break;
        default:
            document.body.style.backgroundImage = "url('https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/2023/03/52196025795_06f077377a_c.jpg')";
    }
}

// Load map using Leaflet.js
function loadMap(lat, lon) {
    const map = L.map('map').setView([lat, lon], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([lat, lon]).addTo(map);
}









document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    const city = document.getElementById('city-input').value.toLowerCase();
    const dummyData = getDummyData(city);

    if (dummyData) {
        displayWeatherData(dummyData);
        loadMap(dummyData.coord.lat, dummyData.coord.lon);
    } else {
        getWeather(city); // Call the API if the state isn't in the dummy data
    }
});
