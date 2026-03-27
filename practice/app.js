let data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    image: "images.jfif",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    image: "images.jfif",
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  }
];

let container = document.getElementById("api");

data.forEach(function(element){

  container.innerHTML += `
    <div class="card">
      <img src="${element.image || 'https://via.placeholder.com/250'}" alt="img">

      <div class="card-body">
        <div class="card-title">${element.title}</div>

        <div class="status ${element.completed ? 'completed' : 'pending'}">
          ${element.completed ? 'Completed' : 'Pending'}
        </div>
      </div>
    </div>
  `;
});