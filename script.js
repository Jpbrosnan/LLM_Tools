let recognition;

function activateVoiceRecognition() {
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'en-GB';

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();

        if (command.includes('products')) {
            speakText('Navigating to the Products page.');
            window.location.href = 'products.html';
        } else if (command.includes('about')) {
            speakText('Navigating to the About page.');
            window.location.href = 'about.html';
        }
    };

    speakText('Voice commands activated. You can say "Products" or "About" to navigate.');
    recognition.start();
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    speechSynthesis.speak(utterance);
}

function stopVoiceDescription() {
    if (recognition) {
        recognition.stop();
        speakText('Voice commands deactivated.');
    }
}

function markAsSold(productId) {
    const product = document.getElementById(productId);
    const soldText = document.createElement('div');
    soldText.textContent = 'SOLD';
    soldText.classList.add('sold-text');
    product.appendChild(soldText);

    const productInfo = product.querySelectorAll('h2, p, button');
    productInfo.forEach(element => {
        element.style.textDecoration = 'line-through';
    });
}
