function activateVoiceRecognition(page) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-GB';
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();

        switch (page) {
            case 'home':
                if (command.includes('product')) {
                    window.location.href = 'products.html';
                } else if (command.includes('about')) {
                    window.location.href = 'about.html';
                }
                break;
            case 'products':
                if (command.includes('home')) {
                    window.location.href = 'index.html';
                } else if (command.includes('about')) {
                    window.location.href = 'about.html';
                } else if (command.includes('buy tesla truck')) {
                    handleProductClick('product1');
                } else if (command.includes('buy mini cooper')) {
                    handleProductClick('product2');
                }
                break;
            case 'about':
                if (command.includes('product')) {
                    window.location.href = 'products.html';
                } else if (command.includes('home')) {
                    window.location.href = 'index.html';
                }
                break;
        }
    };

    recognition.start();
}

function navigateTo(page) {
    const url = `${page}.html`;
    window.location.href = url;
}

function handleProductClick(productId) {
    const product = document.getElementById(productId);
    const productName = product.querySelector('h2');
    const productDescription = product.querySelector('.description');
    const productPrice = product.querySelector('.price');
    const buyButton = product.querySelector('button');

    productName.style.textDecoration = 'line-through';
    productDescription.style.textDecoration = 'line-through';
    productPrice.style.textDecoration = 'line-through';
    buyButton.style.textDecoration = 'line-through';

    const soldText = document.createElement('div');
    soldText.textContent = 'SOLD';
    soldText.style.color = 'red';
    soldText.style.animation = 'flash 1s infinite alternate';
    buyButton.insertAdjacentElement('afterend', soldText);

    buyButton.disabled = true;
}


