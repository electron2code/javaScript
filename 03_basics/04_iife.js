// Immidiately Invoked Function Expression 


// Named IIFE
(function connectToDB() {
    console.log("Connected to DB.");
})();

// connectToDB(); Here is in global scope connectToDB function is not available

// Anonymous IIFE
(() => {
    console.log("Connected to DB two");
})();