const storeNames = (...names) => {
let nameArray = [...names]; // Store names in an array
console.log(nameArray); // Log the array
return nameArray; // Return the array
};
console.log(storeNames('Ramu', 'Raju', 'Ravan'));