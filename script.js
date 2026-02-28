document.addEventListener('DOMContentLoaded', () => {
            
    // Simple click feedback for buttons
    const contactBtn = document.getElementById('contactBtn');
    const comingSoonBtn = document.getElementById('comingSoonBtn');

    // Make sure the elements exist before adding listeners
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("This would open the contact form or scroll to a contact section!");
        });
    }

    if (comingSoonBtn) {
        comingSoonBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // A little visual feedback for the button
            const originalText = comingSoonBtn.innerText;
            comingSoonBtn.innerText = "Thanks for your interest!";
            setTimeout(() => {
                comingSoonBtn.innerText = originalText;
            }, 2000);
        });
    }
});
