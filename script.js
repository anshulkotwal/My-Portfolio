var typed=new Typed(".farzi",{
    strings: ["Front end developer","Web developer","Web Designer"],
    typeSpeed:80,
    backSpeed:50,
    backDelay:50,
    loop:true
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); 
      const formData = new FormData(contactForm);
      for (const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }
      contactForm.reset();
    });
  });
  
