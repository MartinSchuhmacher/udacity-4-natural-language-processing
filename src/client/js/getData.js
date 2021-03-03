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
        document.getElementById('summary').innerHTML = `URL "${allData.url}" analyzed by model "${allData.model}" gives the following results.`;
        document.getElementById('score-tag').innerHTML = `Polarity score tag: ${allData.score}`;
        document.getElementById('polarity-between').innerHTML = `Polarity between text segments: ${allData.polarityBetween.toLowerCase()}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity.toLowerCase()}`;
        document.getElementById('confidence').innerHTML = `Confidence (between 0 and 100): ${allData.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${allData.irony.toLowerCase()}`;
        console.log(allData);
    }
    catch(error) {
        console.log('Something went wrong by getting ALL: ', error);
    }
}
export {getData};