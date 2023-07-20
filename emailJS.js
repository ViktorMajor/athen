window.onload = function () {
  // Replace 'YOUR_SERVICE_ID' and 'YOUR_USER_ID' with your actual EmailJS service and user IDs
  emailjs.init("Zjf2FX_i3KHlYJD70");
};

function sendEmail(e) {
  e.preventDefault();

  // Again replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual service and template IDs
  emailjs.sendForm("service_8rcrflo", "template_eq1wum8", e.target).then(
    function () {
      console.log("SUCCESS!");
      alert("Your message has been sent successfully");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send your message. Please try again later");
    }
  );

  return false;
}