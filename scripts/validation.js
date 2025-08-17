$(document).ready(function() {
    var regForm = $("#registrationForm");
    regForm.submit(function(event) {
        event.preventDefault();

        regForm.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                country: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo : "#password"
                }
            },
            messages: {
                name: {
                    required: "Please eneter your name.",
                    minlength: "Your name must be atleast 4 characters long."
                },
                email: "Please enter a valid email address.",
                country: "Please select your country.",
                
                password: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 5 characters long."
                },
                confirm_password: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 5 characters long.",
                    equalTo: "Please enter the same password as above."
                }
            }
        })
        if(regForm.valid() {
            //AJAX call to submit the form data
        })
    })
})