let inp = document.getElementById("input");
let btn = document.getElementById("result");
let con = document.getElementById("container");


btn.addEventListener("click",()=>{
    let main = document.createElement("div");
    let para = document.createElement("p");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.id = "delBtn"
    btn2.id = "ediBtn"

    para.innerText = inp.value;
    console.log(para);

    btn1.innerText = "Delete";
    btn2.innerText = "Edit";

    para.appendChild(btn1);
    para.appendChild(btn2);
    main.appendChild(para);
    con.appendChild(main);

    inp.value = "";

    delBtn.addEventListener("click", ()=>{
        event.target.parentNode.parentNode.remove()
    })

    ediBtn.addEventListener("click", (e)=>{
        let p = e.target.parentNode;
        let oldTe = p.firstChild.nodeValue;

        let newText = prompt("Enter your new Value", oldTe);

        if (newText !== "" && newText !== null) {
            p.firstChild.nodeValue = newText;
        }
    })
})

