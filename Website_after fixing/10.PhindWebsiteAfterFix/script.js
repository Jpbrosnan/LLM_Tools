// Check for browser support
if ('webkitSpeechRecognition' in window) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-GB"; // Set to British English
    recognition.start();

    recognition.onresult = function(event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                var command = event.results[i][0].transcript;
                processCommand(command);
            }
        }
    };
} else {
    console.log("Your browser does not support voice commands.");
}

function processCommand(command) {
    command = command.toLowerCase();
    if (command.includes("home")) {
        navigateTo('index.html');
    } else if (command.includes("products")) {
        navigateTo('products.html');
    } else if (command.includes("about")) {
        navigateTo('about.html');
    }
}

function navigateTo(page) {
    window.location.href = page;
}

function markAsSold(button) {
    button.parentElement.querySelectorAll('h2, p, button').forEach(el => {
        el.style.textDecoration = 'line-through';
    });
    button.parentElement.innerHTML += '<p style="color: red; animation: flash 1s infinite;">SOLD</p>';
}
