document.addEventListener("DOMContentLoaded", calllback)

function calllback () {
  let element = document.getElementById("create-task-form")//<---Find parent of the element we want
  // let submitButton = element.getElementsByTagName("input")[1] //<---This finds the submit button
  
  element.addEventListener("submit",function(event){ //<---This adds an event listener to the button
  event.preventDefault() //<---This prevents the button from refreshing the page
  let ul = document.getElementById("list") //<--This finds the todoList area (Where we want to add text) 
  let li = document.createElement("li")//<---This creates the "li" we will append to the toDoList(ul)
  let input = document.getElementById("new-task-description") //<---This finds the text field where the user inputs a new toDo item
  
  li.innerHTML = input.value //<---This changes the value of the "li" to the input from the form
  ul.append(li) //<---This appends the new li and its the user input to the ul
 })
}