function myFunction1() {
    console.log("Hello, Alice (Function Declaratiion)");
}

var myFunction2 = function() {
    console.log("Hello, Bob (function expression)");
};

var myFunction3 = () => {
    console.log("Hello, charlia (arrow function)");
};

var myFunction5 = new Function(console.log("Hello, Dave (function constructor)"));

(function() {
    console.log("Hello, Eva (IIFE)");
})();



function* Generator() {
   console.log("Hello, world (Generatior Function)");
  }


function createMultiplier(multiplier) {
    return function(number) {
      return number*number;
    };
  }
  
  // Object method
  const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
var g=Generator(); 
console.log(g);

console.log("This is returning function : "+createMultiplier(2));
console.log("Object method (add):", calculator.add); // Output: [Function: add]
console.log("Object method (subtract):", calculator.subtract);// Output: [Function: subtract]
myFunction1();
myFunction2();
myFunction3();



