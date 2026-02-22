var get = document.getElementById("name")

document.addEventListener("keydown", function(e){

    if(e.key == "w")
        get.value = get.value + e.key
})