/* function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export {handleSubmit};
*/


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
    

    // check if input is valid URL
   /* let formText = document.getElementById('url').value;
    const checkResult = Client.checkForUrl(formText);
    if(checkResult) {
        console.log("::: Starting Request :::");
        fetch('localhost:8081/article');/* , {
           method: 'GET',
            credentials: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formText,
        })
        .then(console.log(res));
        // add data handling
        
        
    }
    else {
        alert('Please input a valid URL "https://..."');
    }

    */

export {handleSubmit};