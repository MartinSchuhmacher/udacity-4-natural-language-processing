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
    console.log("::: Starting Request :::");
    fetch('http://localhost:8081/article');
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
}

export {handleSubmit};