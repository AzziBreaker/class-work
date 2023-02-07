function refreshPage() {
    //window.location.reload();
}

function plus() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let result = document.getElementById("result");
    a = Number(a);
    b = Number(b);
    let c = a + b;
    result.innerText = c;
    refreshPage();
}

function minus() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let result = document.getElementById("result");
    a = Number(a);
    b = Number(b);
    let c = a - b;
    result.innerText = c;
    refreshPage();
}

function multiply() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let result = document.getElementById("result");
    a = Number(a);
    b = Number(b);
    let c = a * b;
    result.innerText = c;
    refreshPage();
}

function divide() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    let result = document.getElementById("result");
    a = Number(a);
    b = Number(b);
    let c = a / b;
    result.innerText = c;
    refreshPage();
}