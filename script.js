
let countdown = 7; // Start from 5 seconds

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the payment amount
    const amount = document.getElementById('amount').value;

    // Show processing animation
    document.getElementById('processing').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('payment-form').classList.add('hidden');
    // Simulate payment processing
    setTimeout(function() {
        // Hide processing animation
        document.getElementById('processing').classList.add('hidden');

        // Show result
        const resultDiv = document.getElementById('result');
        resultDiv.classList.remove('hidden');

        // Display the payment amount
        document.getElementById('payment-amount').textContent = amount;

        // Show tick animation
        const tickAnimation = document.querySelector('.tick-animation');
        tickAnimation.classList.remove('hidden');
    }, 3000); // Simulate a 3-second processing time

    startCountdown();

});



    function startCountdown() {
      const countdownElement = document.getElementById("countdown");

      const interval = setInterval(() => {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
          clearInterval(interval);
          // Redirect to another page
          location.reload(); 
        }
      }, 1000);
    }
