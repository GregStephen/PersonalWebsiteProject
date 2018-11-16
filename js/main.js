let modal = $('#myModal');
let btnSubmit = $("#submit");
let spanClose = $(".close");
let nameFormValue = $("#name");
let emailFormValue = $("#email");
let messageFormValue = $("#message");
let contactForm = $("#contact-form");
let showFormBtn = $("#showFormBtn");
let contactInfo = $("#contact-info");


// function submitForm(){
//   console.log(`name: ${nameFormValue.val()}, email: ${emailFormValue.val()} message: ${messageFormValue.val()}`);
// };

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
  
btnSubmit.click(function(e){
  // submitForm();
  e.preventDefault();
  if (nameFormValue.val() != "" & emailFormValue.val() != ""){
    $(".modal-message").html(`Yo ${nameFormValue.val()}, thanks for reaching out!`);
    modal.css({ display: "block" });
  }
});



spanClose.click( function() {
    modal.css({ display: "none" });
});

$(window).click(function(event) {
    if (event.target == modal) {
        modal.css({ display: "none" });
    }
});

////// CONTACT FORM HIDING //////
contactForm.hide();

showFormBtn.click(function(){
  contactForm.show();
  showFormBtn.hide();
  // contactInfo.hide();
});