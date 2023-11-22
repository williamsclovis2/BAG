document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var feedbackText = document.getElementById("feedbackText").value;


    // Redirect to success page
    window.location.href = "success.html";
});

// redirect to about

function redirectToFeedbackForm() {
    window.location.href = "about.html";
}