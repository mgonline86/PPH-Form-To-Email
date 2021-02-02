let status = document.getElementById('status')

document.getElementById('form1').addEventListener('submit', function(evt){
    evt.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    Email.send({
        SecureToken : "4967c35c-53cb-4829-bb73-38ada18b8633",
        To : "applicationsmortgage@gmail.com",
        From : "mortgage6411@gmail.com",
        Subject : "You have a New Submission",
        Body : `First Name: ${firstName}<br>
                Last Name: ${lastName}<br>
                Email: ${email}<br>
                Message: ${message}`
    }).then(
      message => {
        if(message=="OK"){
            status.innerHTML="Message sent, thank you";
            status.classList.add('success');
            console.log("Message sent, thank you");
            setTimeout(()=>{status.classList.remove('success');status.innerHTML=""},5000);
        }
        else{
            status.innerHTML=`An error occurred:<br>${message}`;
            status.classList.add('error');
            console.log(`An error occurred:<br>${message}`);
            setTimeout(()=>{status.classList.remove('error');status.innerHTML=""},5000);
        };
    }
    );
})