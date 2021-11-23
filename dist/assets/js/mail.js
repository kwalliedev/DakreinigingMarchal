(function () {
    emailjs.init("user_Jt0lHvxSlxt2pFERHlX88");
})();

document.getElementById("submitForm").addEventListener('click', function (e) {
    e.preventDefault()
    var firstname = document.getElementById('voornaam');
    var lastname = document.getElementById('achternaam');
    var email = document.getElementById('email');
    var subject = document.getElementById('onderwerp');
    var message = document.getElementById('bericht');

    firstname.classList.replace("border-red-900", "border-gray-200");
    lastname.classList.replace("border-red-900", "border-gray-200");
    email.classList.replace("border-red-900", "border-gray-200");
    subject.classList.replace("border-red-900", "border-gray-200");
    message.classList.replace("border-red-900", "border-gray-200");

    var errorVoornaam = firstname.nextElementSibling;
    errorVoornaam.classList.add("hidden");

    var errorAchternaam = lastname.nextElementSibling;
    errorAchternaam.classList.add("hidden");

    var errorMail = email.nextElementSibling;
    errorMail.classList.add("hidden");

    var errorMsg = message.nextElementSibling;
    errorMsg.classList.add("hidden");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (validateEmail(email.value)) {

        if (firstname.value !== "" && lastname.value !== "" && subject.value !== "" && message.value !== "" && firstname.value !== undefined && lastname.value !== undefined && subject.value !== undefined && message.value !== undefined) {

            var templateMail = {
                sender_name: firstname.value + " " + lastname.value,
                sender_mail: email.value,
                subject: subject.value,
                msg: message.value,
            }
            var mailModel = document.getElementById("modalmail");
            mailModel.classList.replace('translate-x-full', 'translate-x-0')
            setTimeout(function showModel() {
                mailModel.classList.replace('translate-x-0', "translate-x-full")
            }, 3000)

            emailjs.send("service_8yacc89", "template_a39y0cg", templateMail)
                .then((response) => {
                    console.log("send");
                })
                .catch((error) => {
                    console.error(error);
                });
            document.getElementById('voornaam').value = "";
            document.getElementById('achternaam').value = "";
            document.getElementById('onderwerp').value = "";
            document.getElementById('email').value = "";
            document.getElementById('bericht').value = "";


        } else {
            if (firstname.value === "") {
                errorVoornaam = firstname.nextElementSibling;
                errorVoornaam.classList.remove("hidden");
                name.classList.replace("border-gray-200", "border-red-900");
            }

            if (lastname.value === "") {
                errorAchternaam = firstname.nextElementSibling;
                errorAchternaam.classList.remove("hidden");
                name.classList.replace("border-gray-200", "border-red-900");
            }

            if (subject.value === "") {
                errorOnderwerp = firstname.nextElementSibling;
                errorOnderwerp.classList.remove("hidden");
                name.classList.replace("border-gray-200", "border-red-900");
            }

            if (message.value === "") {
                errorMsg = message.nextElementSibling;
                errorMsg.classList.remove("hidden");
                message.classList.replace("border-gray-200", "border-red-900");

            }
        }
    } else {
        if (firstname.value === "") {
            errorVoornaam = firstname.nextElementSibling;
            errorVoornaam.classList.remove("hidden");
            name.classList.replace("border-gray-200", "border-red-900");
        }
        errorMail = email.nextElementSibling;
        errorMail.classList.remove("hidden");
        email.classList.replace("border-gray-200", "border-red-900");

        if (message.value === "") {
            errorMsg = message.nextElementSibling;
            errorMsg.classList.remove("hidden");
            message.classList.replace("border-gray-200", "border-red-900");

        }
    }
})
