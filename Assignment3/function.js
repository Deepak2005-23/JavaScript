function mouseover(){
    //alert("Good Morning")
    document.getElementById("btn").style.backgroundColor = "blue"; 
}
function onClick(){
    document.getElementById("btn2").style.backgroundColor = "blue";
}
function out(){
    document.getElementById("btn3").style.backgroundColor = "blue";
}
function dblclick(){
    document.getElementsByClassName("xyz")[0].style.backgroundColor = "blue";
}
function onFocus(){
    document.getElementById("btn5").style.backgroundColor = "yellow";
}
function display(){
    let input = document.getElementsById("btn6")
    input.value = input.value.toUpperCase()
}