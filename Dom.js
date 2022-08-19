// //Que1
// const element=document.getElementById('Text')

// //Que2:-Write the code to access element which is having tag as "h1"
// const element=document.getElementsByTagName("h1");

// //Que3:-Write the code to access element which is having class as "box"
// const element=document.getElementsByClassName("box");

// //Que4:-
// const element=document.getElementById("heading");
// element.innerText="Hellow World"

//Que5:-
const button=document.getElementsByTagName('button')[0];
button.addEventListener('click',function(){
    let card=document.getElementsByClassName('card')[0];
    card.style.flexDirection='column';
});

//Que6:-
//What’s the difference between window vs document?
//------------------Document----------------------------------------------------------------------------------------------
//Document Object: The document object represent a web page that is loaded in the browser. 
// By accessing the document object, we can access the element in the HTML page. 
// With the help of document objects, we can add dynamic content to our web page. 
// The document object can be accessed with a window.document or just document.

// It represents any HTML document or web page that is loaded in the browser.
// It is loaded inside the window.
// It is the object of window property.
// All the tags, elements with attributes in HTML are part of the document.
// We can access the document from a window using the window. document
// The document is part of BOM (browser object model) and dom (Document object model)
// Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title
//document.property_name;
//document.method_name;
//--------------------Window----------------------------------------------------------------------------------------------
//Window Object: The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents of the webpage. 
// Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// It represents a browser window or frame that displays the contents of the webpage.
// It is the very first object that is loaded in the browser.
// It is the object of the browser.
// Global objects, functions, and variables of JavaScript are members of the window object.
// We can access the window from the window only. i.e. window.window
// The window is part of BOM, not DOM.
// Properties of the window object cannot be accessed by the document object.
//window.property_name;
//window.method_name;
//Que7:-
const element = document.getElementById('head');
element.style.color='red';
element.id = 'heading'

//Que8:-
const btn = document.getElementById('btnn');
     btn.addEventListener('click',() => {
     const replace = document.getElementById('heading2');
     replace.innerText = "Welcome to Elevation academy";
    })

//Que9:-

function time(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm ="PM";

 if(hrs==0){
        hrs=12;
    }
 if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
    }
if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }
 hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm;

    }
    setInterval(time,1000);

//Que10:-
    function yearChange() {
        let Year = document.getElementById("yearSelect").value;
        document.getElementById("year").innerText = Year;
        
      }

    //Que11
      function numberCheck() {
        let a = document.getElementById("phoneno").value;
        if (!a.startsWith("91")) {
          let b = document.getElementById("startcheck");
          b.style.display = "inline";
        } else {
          let b = document.getElementById("startcheck");
          b.style.display = "none";
        }
        if (a.length != 10) {
          let b = document.getElementById("digitcheck");
          b.style.display = "inline";
        } else {
          let b = document.getElementById("digitcheck");
          b.style.display = "none";
        }
      }
      
      function yearCheck() {
        let a = document.getElementById("byear").value;
        if (a < 1995) {
          let b = document.getElementById("byearcheck");
          b.style.display = "inline";
        } else {
          let b = document.getElementById("byearcheck");
          b.style.display = "none";
        }
      }
    
      
