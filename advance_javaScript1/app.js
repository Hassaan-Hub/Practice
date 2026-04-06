// setTimeout( function() {
//     console.log("hassaan");         // Asynchronous code
// }, 1000);
// console.log("welcome");             // Synchronous code 

// var date = new Date();
// var time = date.getHours()
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
// console.log(time + ":" + minutes + ":" + seconds++);


// function abc(callBack) {                        // call back function
//     setTimeout(function(){
//         obj = {
//             name: "hassaan",
//             num: 12345
//         }
//         for(var i in obj){
//             callBack(obj[i])
//         }
//     }, 1000)
// }

// function foo(data){
//     console.log(data);
// }
// abc(foo)



// function prom(){
//     return new Promise(function(resolve, rejact){                // Promise Function
//         obj = {
//             name: "hassaan",
//             num: 12345
//         }
//         resolve(obj)
//     }, 1000)
// }
// prom()
// .then( function(data) {
//     console.log(data);
// })
// .catch( function(error) {
//     console.log(error);
// })




// fetch("https://jsonplaceholder.typicode.com/todos")        // Fetch API
//     .then(function(data){
//         return data.json()
//     })
//     .then(function(data){
//         document.getElementById("api").innerHTML = data[0].title;
//     })
//     .catch(function(error){
//         console.log(error)
//     })



// fetch("https://jsonplaceholder.typicode.com/albums")        // Fetch API
//     .then(function (data) {
//         return data.json()
//     })
//     .then(function (data) {
//         // document.getElementById("api").innerHTML = data[0].title;
//         for (var i = 0; i < data.length; i++) {
//             document.getElementById("api").innerHTML += data[i].title + "<br>";
//             console.log(data[i]);

//         }
//     })
//     .catch(function (error) {
//         console.log(error)
//     })



// fetch("https://jsonplaceholder.typicode.com/comments")        // Fetch API
//     .then(function (data) {
//         return data.json()
//     })
//     .then(function (data) {
//         for (var i = 0; i < data.length; i++) {
//             document.getElementById("api").innerHTML += 
//             `${data[i].name}<br>${data[i].email}<br>`;
//             // console.log(data[i]);

//         }
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


// setInterval(function(){
    // var date = new Date();
// var hour = date.getHours()
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();

// if(hour < 10)hour = "0" + hour;
// if(minutes < 10)minutes = "0" + minutes;
// if(seconds < 10)seconds = "0" + seconds;
// if(hour > 12)hour = hour - 12;
// if(hour == 0)hour = 12;
// if(hour >= 12)seconds = seconds + "PM";
// else seconds = seconds + "AM";

// var time = hour + ":" + minutes + ":" + seconds

// document.getElementById("time").innerText = time;
// }, 1000)


// var data = [
//     {
//     name: "mira",
//     model: 2015,
//     pirse: 25_000_000,
//     image: "images/BR936951_2bb7d1.jfif"
//   },
//   {
//     name: "corolla grande",
//     model: 2026,
//     pirse: 35_000_000,
//     image: "images/1.8-white-scaled.webp"
//   },
//     {
//     name: "mira",
//     model: 2015,
//     pirse: 25_000_000,
//     image: "images/BR936951_2bb7d1.jfif"
//   }
// ]

// var container = document.getElementById("api")

// data.forEach(function(element){

//     var card = document.createElement("div")
//     var img = document.createElement("img")
//     var p = document.createElement("p")
//     p.innerText = `Name: ${element.name} \n Model: ${element.model} \n Pirse: ${element.pirse}`
//     img.src = element.image

//     card.style.width = "250px";
//     card.style.height = "300px";
//     card.style.border = "1px solid black";
//     card.style.padding = "10px";
//     card.style.margin = "20px";
//     card.style.display = "inline-block"
        
//     img.style.width = "100%"
//     img.style.height = "70%"

//     card.appendChild(img)
//     card.appendChild(p)
//     container.appendChild(card)
// })


// fetch("https://jsonplaceholder.typicode.com/Todos")        // Fetch API
//     .then(function (data) {
//         return data.json()
//     })
//     .then(function (data) {
//         for (var i = 0; i < 1; i++) {
//             document.getElementById("api").innerHTML += 
//             `${data[i].title}<br>`;
//             console.log(data[i]);

//         }
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


// fetch("https://jsonplaceholder.typicode.com/Todos")        // Fetch API
//     .then(function (data) {
//         return data.json()
//     })
//     .then(function (data) {
//         for (var i = 0; i < 1; i++) {
//             document.getElementById("api").innerHTML +=  
//             `${data[i].title}<br>`;
//             console.log(data[i]);

//         }
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
