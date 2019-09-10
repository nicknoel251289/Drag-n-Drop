const container = document.querySelectorAll(".container") //drop target
const columns = document.querySelectorAll(".column")
const boxes = document.querySelectorAll(".box") //draggables

var dragged;

/* events fired on the draggable target */
// document.addEventListener("drag", function(event) {
    
// }, false);

/////**** need to wrap the for loop into an executable function so when a student name is added, this updates automatically */

for(let boxesCount = 0; boxesCount < boxes.length; boxesCount++){
    /////dragstart fires when a draggable element is clicked on an dragged/////
    boxes[boxesCount].addEventListener("dragstart", function(event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        //change selected element(dragstart) opaque
        event.target.style.opacity = .3;
        ///// console.log(dragged); dragged === selected element (event.target) because dragstart/////
    }, false);
}

document.addEventListener("dragend", function(event) {
/////dragend gets fired when you release your mouse click/////
  // reset the transparency
  event.target.style.opacity = "";
  //going to add animation effect when the element drops into a dragend zone
}, false);

/* events fired on the targets that allow draggables */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
    console.log('YOU CRUSHED ME!');
    
  
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "rgb(74, 170, 162)";
  }

}, false);

document.addEventListener("dragleave", function(event) {
/////dragleave fires when the draggable element leaves an element that has this eventlistener///// 
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

const test = document.getElementById("test")

document.addEventListener("drop", function(event) { //set globally within the window for any element to have the drop event listener
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className == "dropzone") {

    event.target.style.background = ""; //removes color background
    dragged.parentNode.removeChild( dragged ); //removed selected draggable element from the element that the draggable was in
    event.target.appendChild( dragged ); //takes our element 

    //console.log(event.target); this is which ever element we decide to drop our draggable on
  }
}, false);