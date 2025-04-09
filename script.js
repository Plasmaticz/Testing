// Redirect to the date location page
function goToNextPage() {
    window.location.href = 'date-location.html';
}

// Save selected location and redirect to the next activity page
function saveLocation() {
    const form = document.getElementById('location-form');
    const location = form.location.value;

    if (!location) {
        alert('Please select a location!');
        return;
    }

    // Save the selection to localStorage
    localStorage.setItem('selectedLocation', location);

    // Redirect to the next page
    window.location.href = 'next-activity.html';
}

// Save selected activity and redirect to the final page
function saveActivity() {
    const form = document.getElementById('activity-form');
    const activity = form.activity.value;

    if (!activity) {
        alert('Please select an activity!');
        return;
    }

    // Save the selection to localStorage
    localStorage.setItem('selectedActivity', activity);

    // Redirect to the final page
    window.location.href = 'final.html';
}

// Send an email with the selected options
function sendEmail() {
    const selectedLocation = localStorage.getItem('selectedLocation');
    const selectedActivity = localStorage.getItem('selectedActivity');

    if (!selectedLocation || !selectedActivity) {
        alert('Error: Some selections are missing.');
        return;
    }

    // Debug: Log the data being sent
    console.log("Sending email with data:", { selectedLocation, selectedActivity });

    emailjs.send("service_pwdksdf", "template_jjdbbqt", {
        to_email: "eric129k@gmail.com",
        location: selectedLocation,
        activity: selectedActivity,
    })
    .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Your choices have been sent!");

        // Redirect to the collage page after email is sent successfully
        window.location.href = 'collage.html';
    })
    .catch((error) => {
        console.error("Error sending email:", error);
        alert(`Failed to send your choices. Error: ${error.text || "Unknown error"}`);
    });
}

