// import js file to test
import {checkForUrl} from "../src/client/js/checkForUrl";

describe("Testing the checker for correct URL syntax", () => {
    test("Test for truthy and falsy URL syntax", () => {
        const urlOne = "https://de.wikipedia.org/wiki/Small";
        const urlTwo = "de.wikipedia.org/wiki/Small";
        expect(checkForUrl(urlOne)).toBeTruthy();
        expect(checkForUrl(urlTwo)).toBeFalsy();
        // alternatively the second check could be '.. .not.toBeTruthy()'
    })
});