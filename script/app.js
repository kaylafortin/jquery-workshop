$('#signup-form').on('submit', function(event) {
    var user = ($("input[name=user]").val())
    var password = ($("input[name=password]").val())
    var password2 = ($("input[name=password2]").val())
    var message = ""
    if (password.length < 10) {
        message += "Error: password must be 10 characters \n";
    }
    if(password !== password2) {
        message += "Error: passwords do not match\n";
    }
    if(!user) {
        message += "Error: no username entered\n";
    }
    if (message === ""){
        alert("form submitted!")
    }
    else {
        alert(message);
        event.preventDefault()
    }
});