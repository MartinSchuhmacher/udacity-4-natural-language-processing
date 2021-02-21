// Function to GET Web API Data
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