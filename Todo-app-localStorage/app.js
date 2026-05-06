let input = document.querySelector("input");
let addBtn = document.getElementById("addBtn");
let container = document.getElementById("container");

let todos = JSON.parse(localStorage.getItem("todo")) || [];

function saveItem() {
    localStorage.setItem("todo", JSON.stringify(todos));
}


function renderTodo(){
   
    container.innerText = "";

    todos.forEach((todo, index) => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let delBtn = document.createElement("button");
        let ediBtn = document.createElement("button");

        li.innerText = todo;
        delBtn.innerText = "Delete";
        ediBtn.innerText = "Edit";

        li.appendChild(delBtn)
        li.appendChild(ediBtn)
        ul.appendChild(li)
        container.appendChild(ul)
        
        delBtn.addEventListener("click", ()=>{
            todos.splice(index, 1);
            renderTodo();
            saveItem()
        })

        ediBtn.addEventListener("click", ()=> {
            let newText = prompt("Enter new text", todo)

            if(newText !== null && newText.trim() !== ""){
                todos[index] = newText;
                saveItem()
                renderTodo()
            }
        })
    });
}



addBtn.addEventListener("click", ()=>{
    let value = input.value.trim()
    
    if(value === "") return;

    todos.push(value);
    saveItem()
    renderTodo()

    input.value = "";
})


