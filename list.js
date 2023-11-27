const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const addbtn= document.getElementById("btn");
function addtask() {
    if (inputbox.value === '') {
        alert("Add some Task in the input before clicking");
        savedata();
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
      
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
          listcontainer.appendChild(li);
    }
    inputbox.value = "";
    savedata();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI")
     {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
 listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();
// Get the input field
// var input = document.getElementById("input-box");

// Execute a function when the user presses a key on the keyboard
inputbox.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
      event.preventDefault();
      //addbtn par click karne par jo functionalities defined hain bo enter key press karne par bhi chalen
      addbtn.click();
   
  }
});

   