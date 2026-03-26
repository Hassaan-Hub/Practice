// The Tasks of some-Array-method:
// Task 1:

let inp = document.querySelector("input");

inp.addEventListener("keyup", function () {
    let val = inp.value.toLowerCase().trim();
    // 1st name check
    if (arr[0].toLowerCase().startsWith(val)) {
        console.log("hassaan matched");
    }
    // 2nd name check
    if (arr[1].toLowerCase().startsWith(val)) {
        console.log("ali matched");
    }
    // 3rd name check
    if (arr[2].toLowerCase().startsWith(val)) {
        console.log("sufyan matched");
    }
    // 4th name check
    if (arr[3].toLowerCase().startsWith(val)) {
        console.log("hasnian matched");
    }
});


//This is  not task just my own practice:

// let user =  +prompt("Type a Number");
// let num = [1,2,3,4,5,6,7,8,9];

// if(user === ""){
//     alert("write something in a prompt.");
// }
// else if(num.some(arr => arr === user)){
//     alert(`Yes ${user} is availible.`);
// }
// else{
//     alert(`The ${user } is not availible here.`);
// }

// Task 2:

// let inp2 = document.querySelector("#inp2");
// let user = [
//     {name: "ayan", age: 10},
//     {name: "sufyan", age: 11},
//     {name: "farhan", age: 12},
//     {name: "hasnain", age: 13},
//     {name: "kashif", age: 14},
// ]
    
// inp2.addEventListener("keyup",function(){
//     let val = inp2.value.toLocaleLowerCase().trim();
    
//     if(user.some(me => me.name === val)){
//         console.log("Yes found"); 
//     }
//     else{
//         console.log("No found");
        
//     }
// }) 

// Task 3:

// let inp3 = document.querySelector("#inp3");
// let user2 = ["aqib", "saqib", "tahir", "hassan", "hussain"];

// inp3.addEventListener("keyup", function(){
//     let value = inp3.value;
//     if(value !== "")
//      if(user2.some(item => item.toLowerCase() === value)){
//         console.log("this name is alredy exist");
//     }    
//     else{
//         console.log("Yes availible");
//     }
// })

// Task 4:

// let inp4 = document.querySelector("#inp4");
// let user4 = ["Mild", "Eggs", "Butter", "Bread"];

// inp4.addEventListener("keyup", function(){
//     let val4 = inp4.value.toLocaleLowerCase().trim();
//     if(user4.some(items => items.toLowerCase() === val4)){
//         console.log("Item Already Exist in cart");
//     }
//     else {
//         if(val4.length >= 3){
//           user4.push(val4);
//           console.log(user4);   
//         } 
//     }   
//     }
// )

// Task 5:

// let inp5 = document.querySelector("#inp5");
// let user5 = [
//     {name: "asif", age: 20},
//     {name: "atif", age: 26},
//     {name: "asim", age: 25},
//     {name: "hussain", age: 25},
//     {name: "aslam", age: 26},
// ]
// inp5.addEventListener("keyup", function(){
//     let val5 = inp5.value.toLocaleLowerCase().trim();
// if(user5.some(nme => nme.name.toLocaleLowerCase().startsWith(val5))){
//     console.log("yes here"); 
// }
// else{
//     alert("something is wrong")
// }
// })