// Count Characters
const countCharacters = (S) => {
    var B = [2];
    let countA = 0;
    let countD = 0;
    let i;
    for (i = 0; i < S.length; i++) {
      if (S[i] === "A") {
        countA += 1;
      } else if (S[i] === "D") {
        countD += 1;
      }
    }
    B[0] = countA;
    B[1] = countD;
   return B;
  };
  

// count the heads

var Count_Occ = (s) => 
{
    
    let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};


// //Count the Vowels

var count_vowel=(S)=>{
   let count = 0;
   let i
   for(i=0;i<S.length;i++){
    if(S[i]=="a"||S[i]=="e"||S[i]=="i"||S[i]=="o"||S[i]=="u"){
        count+=1;
    }
    
   }
   return count;
};


//Concatenate the strings

var Concatenate_Strings = (S1, S2) => 
{
    let str=S1+S2;
    return str;
};
 

//Find Length

const lengthstr=(s)=>{
    let str=s.length;
    return str;
};


//Join Strings

const joinstringfunction=(S,P)=>{
    let str=S+P;
    return str;
};


// //REverse the string

var Reverse_String = (str)=>{
    let strg= str.split("").reverse().join("");
    return strg
};


// //Match the string

var String_Match=(S1,S2)=>{
    if(S1==S2){
        return "YES";
    }
    else {
        return "NO"
    }
};


// //String replace

var Replace = (S, pattern , text) => 
{
      return S.replace(pattern,text);
};
 

// //Split the string

var Split_the_string = (S) => 
{
  let raj =S.split(" ");
  return raj
};



//Find the winner

var Game_Winner = (S) => 
{ 
   let CountA=0, CountD=0;
 for(let i=0;i<S.length;i++){
    if(S.charAt(i)=="A"){
      CountA+=1
    }
    if(S.charAt(i)=="D"){
      CountD+=1
    }
  } 
  if(CountA > CountD){
    return "Aditya";
  }
  else if(CountA<CountD){
    return "Danish";
  }
  else{
    return "Draw";
  }
};



//Plaindrome Check
 
var Palin_Check = (str) =>
 {
	  var i = 0, j = str.length - 1;
    while (i < j) {
  if (str.charAt(i) != str.charAt(j))
          return "False";
    i++;
    j--;
   }
    return "True";
 };



//Count the Vowels and Consonant
 
var Count_Vowels= (S) => 
{
  let countV=0;
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u'){
          countV+=1;
        }
      }
      return countV;
      
};
var Count_Consonants= (S) => 
{
      
      let countV=0
      let countC=0
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u'){
          countV+=1;
        }
        else{
          countC+=1
        }
      }
      return countC;
};

