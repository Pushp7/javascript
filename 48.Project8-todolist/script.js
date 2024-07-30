let taskInput = document.querySelector("#taskInput");
let submit = document.querySelector("#submit");
let list = document.querySelector("#list");

submit.addEventListener("click", function () {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
    }
    else {
        console.log(taskInput.value.trim());
        //creating list element
        let li = document.createElement("li");
        li.innerHTML = taskInput.value.trim();
        list.append(li)

        //creating span element
        let span = document.createElement("span");
        span.innerHTML = "❌"
        li.append(span)

        saveData()
    }
    taskInput.value = "";
})

list.addEventListener("click", function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData()
})

function saveData(){
    localStorage.setItem("todo_list", list.innerHTML)
}

function getData(){
    list.innerHTML = localStorage.getItem("todo_list")
}
getData()
