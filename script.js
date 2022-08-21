

function val(result) {
    form.display.value = form.display.value+result;
}


function calculate() {
    if (form.display.value == "") {
        alert("please enter number")
    }
    else {

        form.display.value = eval(form.display.value);

    }
}

var clear = document.querySelector(".Erase");
clear.addEventListener("click", function () {
    form.display.value = "";
})








