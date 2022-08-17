
function sendEmail() {
    // console.log('it,s working');
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "klaiifahmi@gmail.com",
        Password : "6405669FF33774F553BFA29C9AB7702126D4",
        To : 'klaiifahmi@gmail.com',
        From : "klaiifahmi@gmail.com",
        Subject :"RBK student email: " + document.getElementById("subjectOption").value,
        Body : "Name: " + document.getElementById("name").value + 
        "<br> Email: "+document.getElementById("emailId").value +
        "<br> Message: <br>"+document.getElementById("IdeaSubject").value
    }).then(
      message => alert("Thanks ! we will try to contact you as soon as possible !")
    );
    document.getElementById("msform").reset();
    }

 