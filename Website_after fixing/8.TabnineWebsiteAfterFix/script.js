function navigateTo(page) {
    window.location.href = page + '.html';
}

function sellProduct(productNumber) {
    let product = document.querySelector(`.product-${productNumber}`);
    product.classList.add('sold');
    let soldText = document.createElement('p');
    soldText.textContent = 'SOLD';
    soldText.classList.add('sold-text');
    product.appendChild(soldText);
    let button = product.querySelector('button');
    button.textContent = 'SOLD';
    button.classList.add('sold-button');
}