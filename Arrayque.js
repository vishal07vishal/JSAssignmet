//QUe1:-Find the Product.
const Find_prod=(array,N)=>{
    let prod=1;
    for(let i=0;i<N;i++){
        prod=prod*array[i];
    }
    return prod;

}
console.log(Find_prod([1,2,3,4,5],5));

//Que2:-Find the Sum.

const Find_Sum=(array,N)=>{
    let sum=0;
    for(let i=0;i<N;i++){
        sum=sum+array[i];
    }
       return sum;
    
}
console.log(Find_Sum([1,2,3,4,5],5));

//--- Que3:-Count Occurrences


const findCount = (N, K, Arr) => {

    let count=0;
    for(let i=0 ; i<N ; i++ ){
      if(Arr[i] == K){
         count=count+1;
      } 
     }
     return count;

};
console.log(findCount(4,3,[3,3,1,2]));


//-----Que4:-Even Odd

const findEvenOdd = (N, Arr) => {

let even=0
let Odd=0;
    for(let i=0;i<N;i++){
        if (Arr[i]%2===0){
             even=even+Arr[i]
        }
        else{
            Odd=Odd+Arr[i]
        }
    }
    let B=[even,Odd]
    return B
};
console.log(findEvenOdd(7,[1,2,3,4,5,6,7]));
 

//----Que:-5find whether the number i present or not

const Find_Num = (array,N,M) => 
{
 for(let i=0;i<N;i++){
     if (array[i]==M){
       return "YES"
     }
     
   }
   return "NO"
       
};
console.log(Find_Num([1,2,3,4,5],5,2));


//Que6:-Higher Age
const highAge = (N, Arr) => 
{
   let arr=[]
   let j=0;
   for(let i=0;i<N;i++){
     if (Arr[i]>=18){
       arr[j]=Arr[i]
       j=j+1;
     }
   }
   return arr
};
console.log(highAge(6,[11,23,3,45,72,68]));


//Que7:-Icrement the Array Elements

const Inc_Arr = (array,N) => 
{
  array.forEach(function(foo){
       console.log(foo+1);
    }); 

};
console.log(Inc_Arr([1,2,3,4,5],5));
 

// Que8:-Pass or Fail.

const isAllPass = (N, Arr) => {
    
   let count=0;
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count=count+1;
    }
    // else{
    //   break;
    // }
  }
  if(count===N){
    return "YES";
  }
  return "NO";
};
console.log(isAllPass(7,[13,89,45,98,67,45,54]));


//Que9:-Unique Color Shirt

function Unique_Shirts (arr,N) {

  let count=0;
  for (let i of arr){
     if (arr.indexOf(i)===arr.lastIndexOf(i)){
       count++;
     }
     }
     return count;
   }
   console.log(Unique_Shirts([3,2,4,1,2,3],6));


//Que10:- Min and Max

 function arrayMin(arr) {
    return (Math.min(...arr))
 }

function arrayMax(arr) {
  return (Math.max(...arr))
  
}


//Que11:-Birthday Game

function Birthday_Game(arr,D ,M) {
  let count=0;
 for (i=0;i<=arr.length-1;i++){
   sum=0;
   for (j=0;j<M;j++){
     sum=sum+arr[i+j];
   }
   if (sum===D){
     count++;
   }
 }
 return count;
}
console.log(Birthday_Game([2,2,1,3,2],4,2));
