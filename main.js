// 1- function send email using smtp server

function sendEmail() {
  // console.log('it,s working');


  if (isEmpty($("#name").val()) || isEmpty($("#emailId").val()) || isEmpty($("#IdeaSubject").val()) || isEmpty($("#subjectOption").val())) {
    $("#alertData").html('There is an empty field ! please check again before sharing !')
    $("#alertData").css("color", "red");
  }

  else {
    $("#alertData").css("color", "white");
    Email.send({
      // adding SMTP Credentilas Encruption:
      SecureToken: "baf17418-505c-4742-a273-e55ad1752f98",
      // Host: "smtp.elasticemail.com",
      // Username: "klaiifahmi@gmail.com",
      // Password: "6405669FF33774F553BFA29C9AB7702126D4",
      To: 'klaiifahmi@gmail.com',
      From: "klaiifahmi@gmail.com",
      Subject: "RBK student email: " + document.getElementById("subjectOption").value,
      Body: "Name: " + document.getElementById("name").value +
        "<br> Email: " + document.getElementById("emailId").value +
        "<br> Message: <br>" + document.getElementById("IdeaSubject").value
    }).then(
      message => alert("Thanks ! we will try to contact you as soon as possible !")
    );
    console.log($("#name"));

    $("#hiddenThanks").html("Thank you " + $("#name").val() + " for sharing " + $("#subjectOption").val()) + " !";
    $("#hiddenThanks").css("color", "var(--rbk)");

    document.getElementById("msform").reset();
    setTimeout(reset, 5000);

  }
}

// 2- function reset : to reset the form after sending the email:

function reset() {

  $("#hiddenThanks").css("color", "white");

}


// 2- function isEmpty : to check if a field is Empty before sending the email:

function isEmpty(str) {
  if (str.length === 0) { return true; }
  else { return (false) }
}




