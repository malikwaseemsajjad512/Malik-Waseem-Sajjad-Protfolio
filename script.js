document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    var btn = this.querySelector('.btn-submit');
    var status = this.querySelector('.form-status');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.textContent = '';
    try {
        var res = await fetch(this.action, { method:'POST', body:new FormData(this), headers:{'Accept':'application/json'} });
        if (res.ok) {
            status.style.color = '#4ade80';
            status.textContent = 'Message Sent! Waseem will contact you soon.';
            this.reset();
        } else {
            status.style.color = '#f87171';
            status.textContent = 'Something went wrong. Please try again.';
        }
    } catch(e) {
        status.style.color = '#f87171';
        status.textContent = 'Network error. Please try again.';
    }
    btn.disabled = false;
    btn.textContent = 'Send Message';
});
