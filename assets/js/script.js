const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
    const nameField = document.getElementById("contactName");
    const emailField = document.getElementById("contactEmail");
    const messageField = document.getElementById("contactMessage");
    const errorField = document.getElementById("error-text");
    const formField = document.getElementById("form-data");

    const nameValue = nameField.value;
    const emailVlaue = emailField.value;
    const messageValue = messageField.value;

    var templateParams = {
        nameValue: nameValue,
        emailVlaue: emailVlaue,
        messageValue: messageValue,

    };

    if (nameValue && emailVlaue && messageValue) {
        formField.innerHTML = "Form Submitted Successfully";
        errorField.innerHTML = "";
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";

        emailjs.send("service_test", "template_50745dq", templateParams, "GsReDqNw7HZqhJS2Q");

        console.log(nameValue, emailVlaue, messageValue)
    }

    else {
        errorField.innerHTML = "Please fill all information";
        formField.innerHTML = "";
    }



})