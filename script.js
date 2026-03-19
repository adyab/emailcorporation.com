(function() {
  var form = document.getElementById('serviceForm');
  var statusEl = document.getElementById('formStatus');

  if (!form || !statusEl) return;

  var responses = [
    'Your inquiry has been received and logged. A member of our team will assess whether a response is appropriate within a standard timeframe.',
    'Thank you for your submission. It has been assigned a reference number that we are not able to share with you at this time.',
    'Your request has been forwarded to the appropriate department. The appropriate department has been notified of its receipt.',
    'We have noted your interest in email services. Your inquiry is currently under review by a reviewer.',
    'Submission confirmed. You may not receive a follow-up communication, but your submission has nonetheless been recorded.'
  ];

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var confirmBox = document.getElementById('confirm');
    var orgField = document.getElementById('org');

    if (!confirmBox || !confirmBox.checked) {
      statusEl.textContent = 'Please confirm that you understand nothing immediate will happen.';
      return;
    }

    var base = responses[Math.floor(Math.random() * responses.length)];
    var org = orgField && orgField.value.trim() ? orgField.value.trim() : 'your organization';

    statusEl.textContent = base + ' In most cases, ' + org + ' will continue operating as before.';
    form.reset();
  });
})();
