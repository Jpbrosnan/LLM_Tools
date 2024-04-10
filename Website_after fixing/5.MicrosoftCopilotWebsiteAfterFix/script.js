var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var command = transcript.toLowerCase();
    switch(command) {
        case 'go to home page':
            window.location.href = 'index.html';
            break;
        case 'go to products page':
            window.location.href = 'products.html';
            break;
        case 'go to about page':
            window.location.href = 'about.html';
            break;
        default:
            console.log('Command not recognized');
    }
}

document.getElementById('voiceCommandButton').addEventListener('click', function() {
    recognition.start();
});



var purchaseButtons = document.getElementsByClassName('purchaseButton');
for (var i = 0; i < purchaseButtons.length; i++) {
    purchaseButtons[i].addEventListener('click', function(e) {
        e.target.style.textDecoration = 'line-through';
        e.target.nextElementSibling.style.display = 'block';
    });
}
