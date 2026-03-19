// Year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    setStaticAddressCount();
    setupTestimonialCycler();
    setupAccessForm();
});

function setStaticAddressCount() {
    const el = document.querySelector(".rolling-number");
    if (!el) return;
    el.textContent = "1,000,000+";
}

function setupTestimonialCycler() {
    const testimonials = [
        {
            text: "“The Email Corporation allowed us to centralize our email responsibilities without changing who actually reads the emails.”",
            meta: "Head of Something Approximating Operations\nRegional Client (Name Deferred)"
        },
        {
            text: "“We used to track our email. Now we know that it is being tracked for us, somewhere, by someone.”",
            meta: "Interim Lead, Communications‑Adjacent Function\nConfidential Client"
        },
        {
            text: "“Our teams stopped asking where an email came from and started assuming it was intentional. This has simplified a number of conversations.”",
            meta: "Executive Responsible For Outcomes\nLong‑Term Participant Organization"
        }
    ];

    const textEl = document.getElementById("testimonial-text");
    const metaEl = document.getElementById("testimonial-meta");
    const button = document.getElementById("cycle-testimonial");

    if (!textEl || !metaEl || !button) return;

    let index = 0;

    button.addEventListener("click", () => {
        index = (index + 1) % testimonials.length;
        const t = testimonials[index];
        textEl.textContent = t.text;
        metaEl.textContent = t.meta;
    });
}

function setupAccessForm() {
    const form = document.getElementById("access-form");
    const statusEl = document.getElementById("form-status");

    if (!form || !statusEl) return;

    const responses = [
        "Your indication of interest has been noted by the appropriate systems.",
        "Thank you. No immediate follow‑up is required on your part.",
        "Preliminary evaluation has begun. If action becomes necessary, you may become aware of it.",
        "Submission received. This does not constitute an agreement, but it does acknowledge a possibility."
    ];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const checkbox = document.getElementById("confirm-understanding");
        const orgField = document.getElementById("org-name");

        if (checkbox && !checkbox.checked) {
            statusEl.textContent = "Please confirm that you understand nothing immediate will happen.";
            return;
        }

        const base = responses[Math.floor(Math.random() * responses.length)];
        const org = orgField && orgField.value.trim() ? orgField.value.trim() : "your organization";

        statusEl.textContent = base + " In most cases, " + org + " will continue operating as before.";
        form.reset();
    });
}
