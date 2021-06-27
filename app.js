const navbarBtn = document.querySelector(".navbar_btn")
const sidebar = document.querySelector(".sidebar")
navbarBtn.addEventListener("click", function(){
    let value = sidebar.classList.contains("sidebar-visible")
    if(value){
        sidebar.classList.remove("sidebar-visible");
        navbarBtn.classList.remove("change")
    }
    else{
        sidebar.classList.add("sidebar-visible")
        navbarBtn.classList.add("change")
        
    }
})
const submit = document.getElementById("submit")
const sendConfirmation = document.querySelector(".send-confirmation")
submit.addEventListener("click", function(){
let message = sendConfirmation.classList.contains("send-confirmation-show")
if (message){
    sendConfirmation.classList.remove("send-confirmation-show")
}
else {
    sendConfirmation.classList.add("send-confirmation-show")
    }
})

// const submit = document.getElementById("submit")
// const message = document
// submit.addEventListener("click", function(){
//     if (console.log("SUCCESS!")) {
//         console.log("Ok");
//     }
// })