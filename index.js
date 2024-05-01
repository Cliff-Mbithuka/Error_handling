"use strict"
//  Engineer = "cliff"; // ReferenceError: Engineer is not defined
// console.log(papa);


// const wecode = [Nelly, Max, James, cliff]; //reference error: names not defined

// console.log(wecode; // syntax error: missing closing bracket 


// const name = "JohnBrian";
// name = "Hope"; //Type Error: Assignment to a constant variable 
// console.log(name);


//try...catch syntax 
// const makeError = () => {
//   try{
//     const name = "JohnBrian";
//     name = "Hope";
//   }catch(e){
// console.error(e); 
//   } finally {
//     console.log("....Successfully Submitted"); //executed irregardless of an error or not
//   }
// }
// makeError();

              //Asynchronous
// setTimeout(function() {
//     try {
//       wecode; // Error is not defined
//     } catch(err) {
//       console.error(err);
//     }
//   }, 1000);


  function divide(x, y) {
    if (y === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return x / y;
}

try {
    const result = divide(10, 0);
    console.log("Result:", `${result}`); // This line will not be executed
} catch (error) {
    console.error("An error occurred:", `${error}`);
}
