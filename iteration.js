//Que:1 - Take a number from the user and print the count of digits in that number.

// const Find_Digits = (N) => 
// {
// 	  let count=0;
//   while(N!==0){
//     count=count+1;
//     N=parseInt(N/10)
    
//   }
//   return count;
// };



   //Que:2 - Find the Fives

//Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and
// wants you to find out the number of times 5 occurred in the given number.


// const Find_Five =(N) =>{
//   let count=0; 
//   while(N!=0){
//     reminder=N%10;
//     N=parseInt(N/10)
//     if(reminder==5){
//       count=count+1;
//     }
//   }
//   return count;
// };
// let Numbers=Find_Five(34565452)
// console.log(Numbers);


   //Que:3 - Find sum 

// You are given an integer N ,
// and your task is to find the sum of all the even integers starting from 1
//  upto N (N inclusive).

// const findSum = (n) => {
//     let sum=0
//        let item=2
//        while(item<=n){
//          sum=sum+item;
//          item+=2;
//        }
//        return sum;
//    };
   
  //Que:4 - Find the sum of the digits of a given number.
  
//  const Number_sum = (N) =>{
//   let sum=0;
//   while(N!=0){
//     let digit=N%10
//     N=parseInt(N/10)
//     sum=sum+digit
//   }
//    return sum;
//  };


  //Que:5 - Print the odds

//   const Print_Odd = (N) => 
// {
// 	 console.log('2')
// 	 let num=3;
// 	 while(num<=N){
// 	   console.log(num)
// 	   num+=2
// 	 }
// };
 

//Que:6 - Print the Pattern.

// const Print_pattern = (N) => 
// {
//    let i,j
//    for(i=0;i<N;i++){
//      let result=""
//      for(j=0;j<=i;j++){
//       result=result+"*"
//      }
//      console.log(result);
//    }
// };


//Que7: - check whether the number is primary or not

// const Prime_Check = (n) => {
//   for (var i = 2; i < n; i++) {
//     if (n % i !== 0) {
//       return "YES";
//     } else {
//       return "NO";
//     }
//   }
// };
// console.log(Prime_Check(11));



//Que8:- -print number


// const printNumbers = (n) => {
//   let result=" "
//   let i=1
//   while(i<=n)
//   {
//     result=result+i+" "
//     i++;
//   }
//   console.log(result);
// };


//Que9:-Print the tabel

// const Print_Table = (N) => 
// {
// 	let result=''
//   let i
//   for(i=1;i<=10;i++){
//     result=N+' '+'*'+' '+i+' '+ '=' +' '+ N*i

//     console.log(result);
//   }
// };
