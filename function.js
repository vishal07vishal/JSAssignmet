//1
//Create one function with zero parameter having a console statement;
function hello() {
    console.log('Hello');
}

//2
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    console.log(a+b);
}
sum(3,4)

//3
//Create one arrow function
 let arr = ()=>{
    console.log("Arrow Function");
}
arr();

//4
//"Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
undefined


//5
//"Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
undefined
21


//6
//"Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

//  ReferenceError:a is not defined

 //7
 //Write a function that accepts parameter n and returns factorial of n
 const factorial=(n)=>{
    let fact=1;
    for(i=1;i<=n;i++){
        fact=fact*i;
    }
 return fact;
}
console.log(factorial(4));
