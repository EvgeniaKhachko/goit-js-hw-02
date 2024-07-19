function getShippingCost(country) {
    let returnMessage = '';
 
    switch (country) {
    case 'China':
        returnMessage = 'Shipping to China will cost 100 credits';
    break;
    case 'Chile':
        returnMessage = 'Shipping to Chile will cost 250 credits';
    break;
    case 'Australia':
        returnMessage = 'Shipping to Australia will cost 170 credits';
    break;
    case 'Jamaica':
        returnMessage = 'Shipping to China will cost 120 credits';
    break;
  default:
     returnMessage = 'Sorry, there is no delivery to your country';
    break;
    }

    return returnMessage; 

}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
