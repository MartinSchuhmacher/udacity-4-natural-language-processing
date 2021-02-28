// Function to GET Web API Data
/*
const getUrlData = async (baseURL, zip, apiKey) => {
    const result = await fetch(`${baseURL}${zip}&appid=${apiKey}&units=imperial`);
    try {
        const weatherData = await result.json();
        console.log(weatherData);
        return weatherData;
    }
    catch(error) {
        console.log('Something went wrong: ', error);
    }
}

export {getUrlData};
*/
//require("regenerator-runtime/runtime");

async function getData(url='') {
    const response = await fetch(url);
    try {
        const allData = await response.json();
        console.log(allData);
    }
    catch(error) {
        console.log('Something went wrong by getting ALL: ', error);
    }
}
export {getData};