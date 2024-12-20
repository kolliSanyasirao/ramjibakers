// Example of adding interactivity, like form validation or dynamic content

document.querySelector("form").addEventListener("submit", function(event) {
    alert("Thank you for your message! We will get back to you soon.");
    event.preventDefault(); 
});
