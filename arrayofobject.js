let studentRecords =[ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ] 

//"Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
var students=studentRecords.map((i)=>{
    return i.name;
     })
    console.log(students);


//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
var students=studentRecords.filter((i)=>{
    return i.marks>50;
})
console.log(students)

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
var students=studentRecords.filter((i)=>{
    return (i.marks>50 && i.id>120);
})
console.log(students)

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

var Sum = 0;
for(let i=0;i<=3;i++){
    Sum += studentRecords[i].marks;
}
console.log(Sum);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks
              // from the same dataset used above.
var students=[];
let result5=studentRecords.map((i)=>{

    if(i.marks>50){
    students.push(i.name);
    }
})
console.log(students);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
var students=studentRecords.reduce((res,ele)=>{
    if(ele.id>120){
        res +=ele.marks;
    }
    return res;
},0)
console.log(students)

//Question 7: This time we are required to print the total marks of the students with marks greater than 50
              // after a grace of 15 marks has been added to those students who scored less than 50.

var students=studentRecords.reduce((res,ele)=>{
    if((ele.marks+15)>50){
       res +=ele.marks;
    }
    return res;
  },0)
 console.log(students)

 //Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

 let Arrays=[
    {name:'vishal',class:1,roll:10},
    {name:'masal',class:2,roll:11},
    {name:'vishal',class:3,roll:12},
    {name:'masal',class:4,roll:13},
    {name:'vishal',class:5,roll:14},
    {name:'masal',class:6,roll:15},
]
console.log(Arrays)