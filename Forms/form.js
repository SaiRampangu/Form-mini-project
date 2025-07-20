let myFormEl = document.getElementById('myForm');
let nameEl = document.getElementById('name');
let emailEl = document.getElementById('email');
let nameErrMsgEl = document.getElementById('nameErrMsg');
let emailErrMsgEl = document.getElementById('emailErrMsg');

myFormEl.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
})

nameEl.addEventListener("blur", function() {
    if(nameEl.value.trim() === "") {
        nameErrMsgEl.classList.remove("d-none");
        nameErrMsgEl.textContent = "Name is required.";
    }else {
        nameErrMsgEl.textContent = "";
    }
})

emailEl.addEventListener("blur", function() {
    if(emailEl.value === "") {
        emailErrMsgEl.textContent = "Email is required.";
    } else {
        emailErrMsgEl.textContent = "";
    }
})