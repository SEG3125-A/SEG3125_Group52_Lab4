document.addEventListener('DOMContentLoaded', function() {
    
    $('[data-toggle="tooltip"]').tooltip();

    function validateInput(selector) {
        var input = document.querySelector(selector);
        if (input.value.trim() === '') {
            input.classList.add('is-invalid');
            return false;
        } else {
            input.classList.remove('is-invalid');
            return true;
        }
    }

    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate inputs
        var isServiceSelected = validateInput('#service-select');
        var isDateSelected = validateInput('#date-input');
        var isTimeSelected = validateInput('#time-input');
        var isBarberSelected = validateInput('#barber-select'); 
        var isNameEntered = validateInput('#name-input');
        var isEmailEntered = validateInput('#email-input');
        var isPhoneEntered = validateInput('#phone-input');

        // If all validations pass
        if (isServiceSelected && isDateSelected && isTimeSelected && isBarberSelected && isNameEntered && isEmailEntered) {
            // Process the booking

            // Show a success message
            alert('Thank you for booking with Stylish Strokes!'); // Temporary alert
        }
    });
});