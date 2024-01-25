// Accessing Elements 
const searchInp = document.querySelector("#searchInp");
const serachBtn = document.querySelector("#serachBtn");
const WeatherIcon = document.querySelector("#WeatherIcon");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feelsLike");
const cityname = document.querySelector("#name");
const mainFromHTML = document.querySelector(".main");


async function main() {
    let city = searchInp.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be5cccb24ed9b55206b72bad332e84d8&units=metric`;



    const response = await fetch(url);
    const result = await response.json();

    WeatherIcon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`;
    temp.innerText = result.main.temp;
    feelsLike.innerText = result.main.feels_like;
    cityname.innerText = result.name;

    mainFromHTML.style.display = "block";
    searchInp.value = '';
}

serachBtn.addEventListener('click', main);

// controlling the search bottun by pressing 'Enter' key 
document.addEventListener('keypress', (key) => {
    if (key.key === "Enter") {
        main();
    }
}
);
