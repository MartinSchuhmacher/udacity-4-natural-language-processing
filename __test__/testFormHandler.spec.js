// import js file to test
import {handleSubmit} from "../src/client/js/formHandler";

describe("Testing the form functionality", () => {
    test("Test the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
        expect(typeof handleSubmit).toBe("function");
        /* to the reviewer: Please provide some feedback how I could provide a more precise unit test 
        for my "kind of difficult" handleSubmit function */
    })
});