// function to handle contact form submission
export function contactFormSubmit() {
    let contactForm = document.getElementById('contact');
    contactForm.addEventListener('submit', function (event) {
    let messageConfirmation = document.getElementById('messageConfirmation');

    event.preventDefault(); // Prevent form submission and page reload
  
    // Get form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    // Validate the form data (you can add more validation as needed)
    if (!name || !email || !message) {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Prepare the email body
    let emailBody = JSON.stringify({
      "name": name,
      "email": email,
      "message":message,
    });
    let myHeaders = new Headers();
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: emailBody,
        redirect: 'follow'
    };
    myHeaders.append("Content-Type", "application/json");
    // Send the email (you need to implement the email sending logic here)
    fetch("https://submit-egbxaomkqq-uc.a.run.app", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res ", res)
        if (res.hasErrors) {
            // handle errors
            console.log("errors are ", res.errorName," ", res.errorEmail[0]," ", res.errorMessage)
        }
        if (res.isEmailSend) {
            contactForm.style.display = "none";
            messageConfirmation.style.display = "block";
            console.log("email sent")
        }
        return res;
      })
      .catch((errors) => {
        console.log("error")
      });
    // For the sake of this example, we will log the email body to the console
    console.log(emailBody);
  
    // Reset the form after submission
    event.target.reset();

    });

}