var get = document.getElementById("name")

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        show();
    } else if (e.key === "Backspace") {
        get.value = get.value.slice(0, -1)
    } else if (e.key.length == 1) {
        get.value += e.key;
    }
})

function show() {
    console.log(get.value);
    get.value = ""
}
