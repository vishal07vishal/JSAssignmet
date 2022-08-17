//Que1:-
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

function Duplicate(str,N){
    const set = new Set(str);
    console.log([...set])
}
Duplicate('abcadeecfb');

//Que2:-
//You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)


function printChar(s){
    let map=new Map();
    s.split('').forEach((element)=>{
        if(map.has(element)){
            map.set(element,map.get(element)+1)
        }
        else{
            map.set(element,1)
        }
    });
    s.split('').forEach((i)=>{
        if(map.has(i) && map.get(i)!=0){
            console.log(i + "="+map.get(i)+' ');
            map.set(i,0)
        }
    })

}
let s="abcadeecfb";
printChar(s)
