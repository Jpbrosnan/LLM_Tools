// Define voice commands
const voiceCommands = {
    home: "go home",
    about: "go to about",
    products: "go to products",
    buyTesla: "buy tesla truck",
    buyMini: "buy mini cooper"
  };
  
  // Define element references
  const voiceActivationButtons = document.querySelectorAll("#voice-activation");
  const productBuyButtons = document.querySelectorAll(".buy");
  
  // Function to activate voice commands
  function activateVoiceCommands() {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-GB'; // Set British English language
  
    recognition.onstart = () => console.log("Voice commands activated (British Accent)");
  
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log("Recognized command:", command);
  
      switch (command) {
        case voiceCommands.home:
          window.location.href = "index.html";
          break;
        case voiceCommands.about:
          window.location.href = "about.html";
          break;
        case voiceCommands.products:
          window.location.href = "products.html";
          break;
        case voiceCommands.buyTesla:
          handleBuy(document.getElementById("product-1"));
          break;
        case voiceCommands.buyMini:
          handleBuy(document.getElementById("product-2"));
          break;
        default:
          console.log("Unknown command:", command);
      }
    };
  
    recognition.start();
  }
  
  // Function to handle product purchase simulation
  function handleBuy(productElement) {
    productElement.classList.add("sold");
    const soldText = document.createElement("span");
    soldText.classList.add("sold-text");
    soldText.textContent = "SOLD";
    productElement.appendChild(soldText);
  
    productElement.querySelector("button").style.display = "none";
  }
  
  // Add event listeners
  voiceActivationButtons.forEach(button => button.addEventListener("click", activateVoiceCommands));
  productBuyButtons.forEach(button => button.addEventListener("click", () => handleBuy(button.parentElement)));
  