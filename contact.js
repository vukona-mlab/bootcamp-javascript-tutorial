async function handleFormSubmit(event) {
    event.preventDefault()
    // console.log(event);

    // console.log(document);
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

    // console.log(emailInput);
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid
    console.log(isEmailValid);
    let isMessageValid = messageInput.value.trim !== '';
    console.log({ isMessageValid });
    
    const isFormValid = isEmailValid && isMessageValid

    const user = {
        name: 'Vukona',
        surname: 'Mnisi'
    }

    if(isFormValid) {
        // grab our data from the form
        const formData = new FormData(event.target)
        console.log(formData);
        const response = await fetch('https://formspree.io/f/xkndkobk', 
            {
                method: 'POST', // GET, POST, PATCH, PUT, DELETE
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
        const data = await response.json()
        console.log(data);
        if(data.ok) {
            alert('Email successfully sent')
        }

        console.log('code is running');
        const arr = ['hi', 'there', 'hey']
        console.log(arr);

        arr.forEach((item) => {
            console.log(item);
        })
        console.log(8 + 9);
    } else {
        // alert the user that the form is invalid
        if(isEmailValid !== true) {
            // display the email span
            const emailSpan = document.getElementById('email-span')
            console.log(emailSpan.classList);
            emailSpan.classList.remove('hidden')
            console.log(emailSpan.classList);
        }
        if(isMessageValid !== true) {
            // display the message span
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
}

function handleOnchange(event) {
    // console.log(event);
}
window.addEventListener(('load'), () => {
    console.log(document);

    // setTimeout(()=> {
    //     console.log('hi again');
        
    // }, 10000) // milliseconds
    // setInterval(() => {
    //     console.log('repeated hi');
    // }, 5000)
    console.log('second hi');
    document.getElementById('email').addEventListener('keyup', handleOnchange)
    document.getElementById('username').addEventListener('keyup', handleOnchange)
})