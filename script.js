(function() {
    // 1. Counter Animation
    const counterEl = document.getElementById('addressCount');
    if (counterEl) {
        let count = 612384;
        setInterval(() => {
            const change = Math.floor(Math.random() * 5) - 1; // -1 to +3
            count += change;
            counterEl.textContent = count.toLocaleString();
        }, 3000);
    }

    // 2. Testimonial Carousel
    const testimonials = [
        {
            text: "&ldquo;We have been using The Email Corporation for some time. Our emails arrive.&rdquo;",
            attr: "&mdash; Director of Communications, Meridian Group"
        },
        {
            text: "&ldquo;The vagueness of their service description was initially a concern, but the results are consistent.&rdquo;",
            attr: "&mdash; Compliance Officer, Consolidated Associates LLC"
        },
        {
            text: "&ldquo;They handle our signal routing. We do not ask how.&rdquo;",
            attr: "&mdash; Operations Lead, The Foundry"
        }
    ];

    let currentTestimonial = 0;
    const testimonialText = document.getElementById('testimonialText');
    const nextBtn = document.getElementById('nextTestimonial');

    if (testimonialText && nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonialText.style.opacity = 0;
            setTimeout(() => {
                testimonialText.innerHTML = `
                    ${testimonials[currentTestimonial].text}
                    <div class="testimonial-attr">${testimonials[currentTestimonial].attr}</div>
                `;
                testimonialText.style.opacity = 1;
            }, 200);
        });
    }

    // 3. Fake Form Handling
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');

    if (form && statusEl) {
        const responses = [
            'Your inquiry has been received and logged. A member of our team will assess whether a response is appropriate within a standard timeframe.',
            'Thank you for your submission. It has been assigned a reference number that we are not able to share with you at this time.',
            'Your request has been forwarded to the appropriate department. The appropriate department has been notified of its receipt.',
            'We have noted your interest in email services. Your inquiry is currently under review by a reviewer.',
            'Submission confirmed. You may not receive a follow-up communication, but your submission has nonetheless been recorded.'
        ];

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const confirmBox = document.getElementById('confirmNothing');
            const orgField = document.getElementById('orgName');

            if (!confirmBox || !confirmBox.checked) {
                statusEl.textContent = 'Please confirm that you understand nothing immediate will happen.';
                return;
            }

            const base = responses[Math.floor(Math.random() * responses.length)];
            const org = orgField && orgField.value.trim() ? orgField.value.trim() : "your organization";

            statusEl.textContent = base + " In most cases, " + org + " will continue operating as before.";
            form.reset();
        });
    }

    // 4. Footer Year
    const yearEl = document.getElementById('footerYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
