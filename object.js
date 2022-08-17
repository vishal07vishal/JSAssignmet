//Que1:-Create a Function

function Check(obj1){
    obj1.setter=function(){
        console.log(this.name)
    }
}

//Que2:-Delete a parameter
 function check(obj1){
    delete obj1.rollno;
    return obj1;
 }

 //Que3:-Check whether the Package is Dream Package or not
 function check(obj1){
    if(obj1.salery>50000){
        return "Dream"
    }
    else{
        return "NotDream";
    }
 }
 
//Que4:-Check whether the Object has a parameter or not

function Check(obj1) {
    let i=Object.keys(obj1);
     if (i.length !== 0){
      return 'true';
      }
      else {
        return 'false';
      }
}

//Que5:-Merge the Objects
function check(obj1,obj2){
    return Object.assign(obj1,obj2);
}

//Que6:-Object Multiplyer
function Check(a,obj1) {
    obj1.id=obj1.id*a;
    obj1.houseno=obj1.houseno*a;
    return obj1;
}

//Que7:-Find the  sum of Object Members
function Check(obj1) {
    return (obj1.p1+obj1.p2+obj1.p3);
}

//Que8:-Check whether the Objects are same or not.
function check(obj1,a,b) {
    if((obj1.name===a)&&(obj1.id===b)){
      return 'true';
    }
    else{
      return 'false';
    }
}

