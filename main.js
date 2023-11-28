let inputBox = document.getElementById("inputBox");
let listContainer = document.getElementById("list-container")

/* Adding task to list*/

const addTask = () => {
    if(inputBox.value === "") {
        alert("you should have to write your task");
        } else {
        let li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
};

/* upadting status of task */

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})