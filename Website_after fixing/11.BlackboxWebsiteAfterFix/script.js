const voiceCommands = {
    home: ['go to home', 'home page', 'back to home'],
    about: ['go to about', 'about page', 'learn about us'],
    products: ['go to products', 'product page', 'view products'],
    tesla: ['buy tesla', 'purchase tesla', 'select tesla'],
    miniCooper: ['buy mini cooper', 'purchase mini cooper', 'select mini cooper'],
  };
  
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices().find((voice) => voice.name === 'Google UK English Female');
    window.speechSynthesis.speak(utterance);
  };
  
  const activateVoiceCommands = () => {
    document.body.addEventListener('click', () => {
      const commands = Object.values(voiceCommands).flat();
      const command = speechRecognition.resultValue;
  
      if (commands.includes(command.toLowerCase())) {
        const page = voiceCommands[command.toLowerCase()];
        switch (page) {
          case 'home':
            window.location.href = 'index.html';
            break;
          case 'about':
            window.location.href = 'about.html';
            break;
          case 'products':
            window.location.href = 'products.html';
            break;
          case 'tesla':
            document.querySelector('#product-1 .buy-button').click();
            break;
          case 'miniCooper':
            document.querySelector('#product-2 .buy-button').click();
            break;
        }
      }
    });
  };
  
  const initSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-GB';
  
    recognition.addEventListener('result', (event) => {
      speechRecognition.resultValue = event.results[0][0].transcript;
    });
  
    recognition.addEventListener('end', () => {
      if (!speechRecognition.resultValue) {
        speak('I did not understand your command. Please try again.');
      }
    });
  
    recognition.addEventListener('error', (event) => {
      console.error('Error occurred:', event.error);
    });
  
    return recognition;
  };
  
  const speechRecognition = initSpeechRecognition();
  
  document.addEventListener('DOMContentLoaded', () => {
    const voiceCommandButtons = document.querySelectorAll('.voice-command-button');
    voiceCommandButtons.forEach((button) => {
      button.addEventListener('click', activateVoiceCommands);
    });
  
    const productBuyButtons = document.querySelectorAll('.buy-button');
    productBuyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.parentElement.querySelector('.product-name').style.textDecoration = 'line-through';
        button.parentElement.querySelector('.product-description').style.textDecoration = 'line-through';
        button.parentElement.querySelector('.product-price').style.textDecoration = 'line-through';
        button.style.display = 'none';
        const soldText = document.createElement('p');
        soldText.classList.add('sold');
        soldText.textContent = 'SOLD';
        button.parentElement.appendChild(soldText);
        speak('This product has been sold.');
      });
    });
  });