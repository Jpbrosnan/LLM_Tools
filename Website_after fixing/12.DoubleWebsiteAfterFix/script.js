document.body.onclick = function() {
    let recognition = new window.webkitSpeechRecognition();
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript;
        switch (command.toLowerCase()) {
            case "go to products":
                window.location = 'products.html';
                break;
            case "go to about":
                window.location = 'about.html';
                break;
            // Add cases for other voice commands
        }
    };
    recognition.start();
};
