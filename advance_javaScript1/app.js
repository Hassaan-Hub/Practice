// setTimeout( function() {
//     console.log("hassaan");         // Asynchronous code
// }, 1000);
// console.log("welcome");             // Synchronous code 




// function foo(callBack) {                 // call back function
//     setTimeout(function () {
//         obj = {
//             name: "hassaan",
//             roll: 123,
//         }
//         for(var i in obj){
//         callBack(obj[i])
//         }
//     })
// }

// function abc(data){
//     console.log(data);
// }
// foo(abc)



// function abc(){
//     return new Promise(function(resolve, reject){        //  Promise Function
//         setInterval(function(){
//             obj = {
//                 name: "hassaan",
//                 roll: 123,
//             }
//             resolve(obj)
//         }, 2000);
//     })
// }

// abc()
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
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





// fetch("https://jsonplaceholder.typicode.com/Todos")        // Fetch API
//     .then(function (data) {
//         return data.json()
//     })
//     .then(function (data) {
//         for (var i = 0; i < 5; i++) {
//             document.getElementById("api").innerHTML += 
//             `${data[i].title}<br>`;
//             console.log(data[i]);

//         }
//     })
//     .catch(function (error) {
//         console.log(error)
//     })