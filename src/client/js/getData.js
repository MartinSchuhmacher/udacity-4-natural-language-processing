async function getData(url='') {
    
    try {
        const response = await fetch(url);
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