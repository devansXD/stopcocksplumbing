
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });

    const getStartedBtn = document.querySelector('.primary-button');
    getStartedBtn.addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});
