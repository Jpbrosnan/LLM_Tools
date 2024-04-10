function activateVoiceCommands() {
    if (annyang) {
        var commands = {
            'purchase product *product': function(product) {
                purchaseProduct(product);
            }
        };
        annyang.addCommands(commands);
        annyang.start();
    } else {
        console.log("Voice command library not found.");
    }
}

// Assuming that we have a shopping cart system
function purchaseProduct(product) {
    var shoppingCart = getShoppingCart(); // getShoppingCart is a hypothetical function that returns the current shopping cart
    if (shoppingCart) {
        shoppingCart.add(product); // Assuming the shopping cart has an add method
        console.log(product + " has been added to your shopping cart.");
    } else {
        console.log("Shopping cart not found.");
    }
}
