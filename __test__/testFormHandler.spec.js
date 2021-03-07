// import js file to test
import {handleSubmit} from "../src/client/js/formHandler";

describe("Testing the form functionality", () => {
    test("Test the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
        expect(typeof handleSubmit).toBe("function");
    })
});