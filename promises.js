//Callback function,when we call a function inside a function or passes
// function as an argument while calling a function is called as callback function.

function add(a,b){
    return a+b;
 }
  function sum2(c,a,b){
      c(a+b);
 }
  sum2(function(add){
     console.log(add);
},2,3)



//Q2-"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.

// const pro=()=>{
//     setTimeout(() => {
//         console.log('1')
//     }, 1000);
//     setTimeout(() => {
//         console.log('2')
//     }, 2000);
//     setTimeout(() => {
//         console.log('3')
//     }, 3000);
//     setTimeout(() => {
//         console.log('4')
//     }, 4000);
//     setTimeout(() => {
//         console.log('5')
//     }, 5000);
//     setTimeout(() => {
//         console.log('6')
//     }, 6000);
//     setTimeout(() => {
//         console.log('7')
//     }, 7000);
// }
// pro();


//Q3
// const arr=[];
// for (let i=0;i<8;i++){
//     const promise= new Promise(function (res,rej){
//       setTimeout(()=>{
//      res(i);
//     },1000*i);
//     })
// arr.push(promise);
// }
// for (let i=0;i<arr.length;i++){
// arr[i].then(data=>{
//   console.log(data);
// }).catch(error=>{
//   console.log(error);
// })
// };

//Q4-Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
const foo =(number) => {
 
    return new Promise((resolve,reject) =>{
 
     if(number =="yes"){
         resolve(number)
     }else{
         reject("Promise Rejected")
     }
    })
 }
 
 foo("yes").then((data)=>{
     console.log(data);
 }).catch((error)=>{
     console.log(error);
 });

 //Q5-Create examples to explain callback function

 function prom(){
    fun();
}
function fun(){
    console.log('Callback funtion');
    }
   prom();


// Q6-Create examples to explain callback hell function
function a(a, b, c) {
    setTimeout((a) => {
      console.log("Callback");
      setTimeout(
        (a) => {
          console.log(a + " hell function");
          setTimeout(
            (c) => {
              console.log(c);
            },2000, c);
        }, 2000, b);
    }, 2000);
}
a(1,2,3);



//Q7-Create examples to explain promises function
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
         myResolve("myResolve"); 
        }, 3000);
    setTimeout(function(){
        myReject("Rejected");
    },3000);
  });
  
  myPromise.then(function(value) {
return value;
  });

  //Q8-Create examples to explain async await function

  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
   
  }
  asyncCall();

  //Q9-Create examples to explain promise.all function
  const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});