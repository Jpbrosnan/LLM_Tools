// JavaScript for voice command functionality
document.getElementById('voiceCommandButton').addEventListener('click', function() {
    // Your code for activating voice commands can go here
    // For example, using Web Speech API for speech recognition
    // This is a basic example to demonstrate the functionality
    alert('Voice commands activated');
});

// JavaScript for product page functionality
document.getElementById('product1Button').addEventListener('click', function() {
    // Your code for handling the click event on product 1 button
    // For example, marking the product as sold and displaying "SOLD" text
    this.innerHTML = '<s>' + this.innerHTML + '</s>';
    this.disabled = true;
    document.getElementById('product1Status').innerHTML = 'SOLD';
});

document.getElementById('product2Button').addEventListener('click', function() {
    // Your code for handling the click event on product 2 button
    // For example, marking the product as sold and displaying "SOLD" text
    this.innerHTML = '<s>' + this.innerHTML + '</s>';
    this.disabled = true;
    document.getElementById('product2Status').innerHTML = 'SOLD';
});

// JavaScript for about page functionality
document.getElementById('aboutPage').addEventListener('click', function() {
    // Your code for handling the click event on the about page
    // For example, navigating to the about page using voice commands
    alert('Navigating to About page');
});
