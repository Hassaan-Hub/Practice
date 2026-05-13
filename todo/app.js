// let inp = document.getElementById("input");
// let btn = document.getElementById("result");
// let con = document.getElementById("container");

// let myTodos = JSON.parse(localStorage.getItem("Todo")) || []

// let editIndex = null;

// let saveItem = () => {
//     localStorage.setItem("Todo", JSON.stringify(myTodos));
// }

// let renderTodo = () => {
//     con.innerText = "";

//     myTodos.forEach((todo, index) => {

//         let ul = document.createElement("ul");
//         let li = document.createElement("li");
//         let btn1 = document.createElement("button");
//         let btn2 = document.createElement("button");

//         li.innerText = todo;
//         btn1.innerText = "Delete";
//         btn2.innerText = "Edit";

//         li.appendChild(btn1);
//         li.appendChild(btn2);
//         ul.appendChild(li);
//         con.appendChild(ul);

//         inp.value = "";

//         btn1.addEventListener("click", () => {
//             myTodos.splice(index, 1)
//             saveItem();
//             renderTodo();
//         })

//         btn2.addEventListener("click", () => {
//             inp.value = todo;
//             editIndex = index;
//             btn.innerText = "Updated";
//         })
//         btn.innerText = "Add";
//     });

// };



// btn.addEventListener("click", () => {
//     let value = inp.value.trim()

//     if (value === "") return;

//     if (editIndex !== null) {
//         myTodos[editIndex] = value;
//         editIndex = null;
//     } else {
//         myTodos.push(value);
//     }

//     saveItem()
//     renderTodo()

//     inp.value = "";
// })
