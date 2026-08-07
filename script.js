const text = [
"Full Stack Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type, 1500);

}else{

setTimeout(type, 100);

}

})();
function handleContactSubmit(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  
  // Show loading state on button
  submitBtn.innerHTML = `<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>`;
  submitBtn.disabled = true;

  // Send the form directly to your email
  emailjs.sendForm('service_hcii73k', 'template_p5llogp', event.target)
    .then(() => {
      // Show success modal
      document.getElementById("responseModal").style.display = "flex";

      // Reset button state
      submitBtn.innerHTML = `<span>Send Message</span> <i class="fas fa-paper-plane"></i>`;
      submitBtn.disabled = false;

      // Clear the form fields
      document.getElementById("portfolioContactForm").reset();
    })
    .catch((error) => {
      alert("Failed to send message. Error: " + JSON.stringify(error));
      submitBtn.innerHTML = `<span>Send Message</span> <i class="fas fa-paper-plane"></i>`;
      submitBtn.disabled = false;
    });
}

function closeResponseModal() {
  document.getElementById("responseModal").style.display = "none";
}
