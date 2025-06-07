document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const loanClosureForm = document.getElementById('loanClosureForm');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const paymentMethod = document.getElementById('paymentMethod').value;
            alert(`Payment method ${paymentMethod} selected.`);
        });
    }

    if (loanClosureForm) {
        loanClosureForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Loan closure request submitted.');
        });
    }
});