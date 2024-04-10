// script.js
let synth = window.speechSynthesis;
let recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-GB';

function startListening() {
    recognition.start();
}

recognition.onresult = function(event) {
    let result = event.results[event.results.length - 1];
    if (result.isFinal) {
        navigate(result[0].transcript.trim().toLowerCase());
    }
}

function navigate(command) {
    switch (command) {
        case 'go to products':
            window.location.href = 'products.html';
            break;
        case 'go to about':
            window.location.href = 'about.html';
            break;
        case 'go home':
            window.location.href = 'index.html';
            break;
        case 'buy product 1':
            markAsSold('product1');
            break;
        case 'buy product 2':
            markAsSold('product2');
            break;
        default:
            speak('Sorry, I did not understand that command.');
    }
}

function markAsSold(id) {
    let product = document.getElementById(id);
    product.classList.add('sold');
    product.querySelector('.buy').style.display = 'none';
    product.insertAdjacentHTML('beforeend', '<p class="sold-text">SOLD</p>');
    speak('Product has been marked as sold.');
}

function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    synth.speak(utterance);
}