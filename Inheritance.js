//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent={
    property: "100 acre land",
    villa:"solapur",
};
let child={
    address:'vision institute MORSHI',
    Dist:'solapur'
}
child._proto_=parent;
console.log(child._proto_.property)


//2.Write code to explain prototype chaining.
let parent1={
    name:'vishal',
    age: 22,
    getDetails:function(){
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }

};
let child1={
    address:'Mahua',
    Dist:'Vaishali',
}
child1._proto_=parent1;
console.log(child1._proto_.name)
parent1.getDetails();


//3. Add a method to calculate sum of all elements in Array in array's protype, 
// use that method to calculate sum for multiple arrays.

let arr=[10,20,30,40,50];
let result={
    getSum:function(){
        let sum=arr.reduce((acc,e)=>acc=acc+e,0);
        console.log(sum);//150
    }
}
result.getSum();


//4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let obj={
    name:'vishal',
    college:'skn sinhgad collage',
    branch:'Mechanical Engineering'
}
let result2=Object.keys(obj)
let result3=Object.values(obj)
console.log(result2)
console.log(result3)