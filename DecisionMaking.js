
                                               // 🙌Disition Making 🙌


//Que1//Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
const Calculator = (A, B, C) => 
{
  switch(A){
      case '+':
        return B+C;
      
      case '-':
        return B-C;
        
      case '*':
        return B*C;
        
      case '/':
        return B/C;
     
}
  
};



//Que2//Write a program that takes a number and prints whether the number is divisible by 6
// and 9 or not.

const Check_divisibility = (N) => {
  if(N % 6 === 0 & N % 9 === 0 ){
      return ("Divisible by both")
    } 
    else{ 
      return ("Not Divisible by both")
    }  
};

//Que3//You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.
   
const isEligible = (a) => {
  if(a > 18){
    return ("Eligible for Voting")
  }
  else{
    return ("Not Eligible for Voting")
  }
};


//Que4//PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values Xand Y and asks 
//you to find the relation between them.The relationships between integers Xand Yare as follows:
   
const findRelation = (x,y) => {
  if( x < y){
    return (x + " is smaller than " + y)
  }
  else if(x > y){
    return (x + " is greater than " + y)
  }
  else{
    return(x + " is equal to " + y)
  }
};

//Que5//Your school has the following grading system based upon the marks(M) obtained by a student:

const findGrades = (a) => {
  if (a<= 10){
    return  "E";
  }
  else if (a>=11 && a<=20){
    return "D";
  }
  else if (a>=21 && a<=30){
    return "C";
  }
   else if (a>=31 && a<=40){
    return "B";
  }
   else if (a>=41 && a<=50){
    return "A";
  }
  else{
    return "invalid marks"
  }
};


//Que6//You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

const getValue = (a) => {
  if(a=='P'||a=='p'){
 return ("PrepBytes");
}
else if(a=='Z'||a=='z'){
   return ("Zenith");
}
else if(a=='E'||a=='e'){
   return ("Expert Coder");
}
else if(a=='D'||a=='d'){
   return ("Data Structure");
}
else{
 return ("Invali");
}
};


//Que7//You are given 3distinct integers X,Y,and Z,and your task is to find 
//and return the second smallest integer among the three provided integers.

const findSndSmallest = (x,y,z) => {
  if((x<y && y<z) || (x>y && y>z))
  {
     return y;
   }
   else if((y<x && x<z) || (y>x && x>z))
   {
     return x;
   }
   else
   {
     return z ;
   }
};


//Que8//Check whether the triangle is Acute or Obtuse

const Triangle_Check = (A,B,C) => {
  if(A < 90 && B < 90 && C < 90)  {
      return 'acute';
      }
      else{
        return 'obtuse';
      }  
  
 };

 //Que9:-Find the maximum out of three numbers.

  
const Max_out_of_three = (A,B,C) => {
  if(A>B&&A>C){
    return (A);
  }
  
  else if(B>A&&B>C){
    return (B);
  }
  
  else if(C>A&&C>B){
    return (C);
  }
  
  else{
    return (-1);
  }  

};