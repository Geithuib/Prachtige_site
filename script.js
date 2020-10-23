import '@material/mwc-icon';

const countryElem = document.getElementById("country");
const dateList = document.getElementById("datelist");
const weatherList = document.getElementById("weatherlist");

async function fetchApi() {
    const response = await fetch("https://www.metaweather.com/api/location/44418/2020/10/23/");
    const result = await response.json();

    console.log(result)
    result.forEach((element) => {
        const temp = element.the_temp;
        const time = element.created;

        let tempLi = document.createElement('li');
        let createLi = document.createElement('li');

        tempLi.textContent = temp;
        createLi.textContent = time.substring(0,16);

        dateList.appendChild(createLi);
        weatherList.appendChild(tempLi);
    });
    
}

fetchApi();
