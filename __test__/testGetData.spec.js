// import js file to test
import {getData} from "../src/client/js/getData";

describe("Testing the fetch data functionality", () => {
    test("Fetch works", async () => {
        await expect(getData('/all')).rejects.toThrowError();
    })
});