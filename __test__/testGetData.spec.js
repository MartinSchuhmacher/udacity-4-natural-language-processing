// import js file to test
import {getData} from "../src/client/js/getData";

function mockFetch() {
    return jest.fn().mockImplementation(() => 
        Promise.resolve({
            json: () => 
                Promise.resolve({
                    url: 'www.testurl.org',
                    model: 'testmodel',
                    score: 'a',
                    polarityBetween: 'agree',
                    subjectivity: 'objective',
                    confidence: '100',
                    irony: 'ironic'
            })
        })
    );
}

describe("Testing getdata functionality", () => {
    test("Get Data and populate html page", async () => {
        document.body.innerHTML = `
        <div id="results">
            <div id="summary"></div>
            <div id="score-tag">hi</div>
            <div id="polarity-between"></div>
            <div id="subjectivity"></div>
            <div id="confidence"></div>
            <div id="irony"></div>
        </div>
        `;
        fetch = mockFetch();
        const summary = document.getElementById('summary');
        const scoreTag = document.getElementById('score-tag');
        const polarityBetween = document.getElementById('polarity-between');
        const subjectivity = document.getElementById('subjectivity');
        const confidence = document.getElementById('confidence');
        const irony = document.getElementById('irony');
        await getData()
        .then( () => {
            expect(summary.textContent).toEqual('URL "www.testurl.org" analyzed by model "testmodel" gives the following results.');
            expect(scoreTag.textContent).toEqual('Polarity score tag: a');
            expect(polarityBetween.textContent).toEqual('Polarity between text segments: agree');
            expect(subjectivity.textContent).toEqual('Subjectivity: objective');
            expect(confidence.textContent).toEqual('Confidence (between 0 and 100): 100');
            expect(irony.textContent).toEqual('Irony: ironic');
        });
    })
});