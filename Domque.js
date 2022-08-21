//                🙂DOM🙂


//1.
const element=document.getElementById("text")

//2.
const element1=document.getElementsByTagName("h1")

//3.
const element2=document.getElementsByClassName("box")

//4.
const element3=document.getElementById("hellow")
  element3.innerText='Hellow World'

//5.
const button=document.getElementsByTagName('button')[0];
button.addEventListener('click',function(){
    let card=document.getElementsByClassName('card')[0];
    card.style.flexDirection='column';
});

//6.
const element4=document.getElementById("head")
 element4.style.color='red';
 element4.id='heading'
 

 //7.

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



//8.
const heading=document.getElementById("heading")
const btnn=document.getElementById("btn2")

btnn.addEventListener('click',function(){
   heading.innerText='Welcome to Elevation academy'
})

//9.
function clock(){
  const time=new Date();
  const hrs=time.getHours();
  const mins=time.getMinutes()
  const secs=time.getSeconds();

  console.log(hrs,mins,secs);

}
clock()
//setInterval(clock,1000)


//Q10:-
function yearChange(){
  let Year=document.getElementById("yearSelect").value;
  document.getElementById("year").innerText=Year
}


//Q11:-
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