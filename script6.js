// Function to open tabs
function openTab(evt, tabName) {
    // Hide all tab contents
    var tabcontents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active");
    }

    // Remove active class from all tab links
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab and add an active class to the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Set default tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablink').click();
});

// Accordion functionality
var acc = document.getElementsByClassName("accordion-button");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Toggle active class
        this.classList.toggle("active");

        // Toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Function to open component detail in a new tab
function openComponentDetail(componentName) {
    // Replace spaces with underscores and ensure case sensitivity
    var componentURL = "components/" + componentName + ".html";
    window.open(componentURL, '_blank');
}

// Search Functionality
function searchComponents() {
    var input, filter, tabcontent, componentCards, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    tabcontent = document.getElementsByClassName('tabcontent');

    for (i = 0; i < tabcontent.length; i++) {
        componentCards = tabcontent[i].getElementsByClassName('component-card');
        for (var j = 0; j < componentCards.length; j++) {
            txtValue = componentCards[j].textContent || componentCards[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                componentCards[j].style.display = "";
            } else {
                componentCards[j].style.display = "none";
            }
        }
    }
}
