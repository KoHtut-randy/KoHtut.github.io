function validate(){
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener('click',(e) =>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendEmail(name.value,email.value,msg.value);
            success();
        }
    });
}
validate();

function sendEmail(name,email,msg){
    emailjs.send("service_rbm4ad7","template_zelzd4e",{
        to_name: name,
        from_name: email,
        message: msg,
    });
}
function emptyerror(){
    swal({
        title: "Oh no.....!",
        text: "Empty!",
        icon: "error",
    });
}
function success(){
    swal({
        title: "Email Send Successfully!",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}