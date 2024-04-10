function markSold(button) {
    const product = button.parentNode;
    product.querySelector('p').style.textDecoration = "line-through";
    product.querySelector('button').style.textDecoration = "line-through";
    product.querySelector('.sold').style.display = "block";
}

// Example of using speech recognition to navigate (simplified)
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-GB'; // British accent
recognition.interimResults = false;

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    if (transcript.includes('go to products')) {
        window.location = 'products.html';
    } else if (transcript.includes('go to about')) {
        window.location = 'about.html';
    }
});

document.body.onclick = () => {
    recognition.start();
};