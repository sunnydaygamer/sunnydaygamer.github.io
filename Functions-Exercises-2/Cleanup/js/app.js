// get button and div
let button = document.getElementById("clean");
let return1 = document.getElementById("return");

//make button work, grab storage, replace with #, then update div
button.onclick = function(){
    let snatch = document.getElementById("storage").value;
    snatch = snatch.replaceAll('#', '');
    return1.innerHTML = snatch;
}