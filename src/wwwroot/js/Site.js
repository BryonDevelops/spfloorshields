const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// Close menu when going to new page
if (btn.classList.contains("block")) {
  nav.classList.toggle('hidden');
}

btn.addEventListener('click', () => {
  if (nav.style.display === "block") {
    nav.classList.toggle('hidden');
  } else {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  }
});

function sendEmail() {
  var email = document.getElementById("email").value;
  var custName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: 'bryondevelops@gmail.com',
        Password: "28680F3AF3764E4787DB3A80859374CA4538",
        To: 'dominic@sp-shields.com',
        From: 'bryondevelops@gmail.com',
        Subject: "Email from Contact Form",
        Body : "<html><h2>Message Details</h2><strong>Name: </strong>" + custName + "<br><strong>Email: </strong>" + email + "<br><strong>Phone: </strong>" + phone + "<br><strong>Message: </strong>" + message + "<br></html>"
    });
};