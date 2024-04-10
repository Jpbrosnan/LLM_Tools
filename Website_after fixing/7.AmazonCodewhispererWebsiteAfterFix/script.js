
// Script

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
button.addEventListener('click', handleClick);
});

function handleClick(e) {
if(e.target.id === 'productsButton') {
location.href = 'products.html';
} else if(e.target.id === 'aboutButton') {
location.href = 'about.html';
} else if(e.target.id === 'homeButton') {
location.href = 'index.html';
}

// Add product purchase functionality
if(e.target.classList.contains('buy')) {
e.target.style.textDecoration = 'line-through';
e.target.nextElementSibling.style.textDecoration = 'line-through';
e.target.parentElement.insertAdjacentHTML('beforeend', '<p style="color: red;">SOLD</p>');
}
}