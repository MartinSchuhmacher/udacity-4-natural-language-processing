function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
    const regex = new RegExp(expression);
    // match input data with reg expression
    return (inputText.match(regex) ? true : false);
}

export {checkForUrl};