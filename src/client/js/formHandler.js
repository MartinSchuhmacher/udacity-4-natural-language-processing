function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    const formText = document.getElementById('url').value;
    const checkResult = Client.checkForUrl(formText);
    // for debuging only
    console.log("Result: " + checkResult);
    console.log("::: Starting Request :::");

    // if check confirms valid URL
    if (checkResult) {
        fetch('http://localhost:8081/article', { 
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: formText
            })
            }
        )
        .then(function() {
            Client.getData('/all');
        })
    }
    else {
        alert("<Please enter a valid URL starting with http/https>");
    }
};

export {handleSubmit};