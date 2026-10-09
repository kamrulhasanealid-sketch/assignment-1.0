// console.log("Javascript connected!");

const registerBtns = document.querySelectorAll(".register");

registerBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
    // if(btn.textContent === "Register Now"){
    //     btn.textContent = "Registration Started";
    // }else{
    //     btn.textContent = "Register Now";}

const registerBtns = document.querySelectorAll(".register");
const registrationModal = document.getElementById("registrationModal");
const closeForm = document.getElementById("closeForm");

registerBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        registrationModal.style.display = "flex";
    });
});

closeForm.addEventListener("click", function () {
    registrationModal.style.display = "none";
});

    });


const registrationForm = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.style.display = "block";
});

});