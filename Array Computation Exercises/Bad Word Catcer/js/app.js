//creating a bad word catcher, check requirements on Canvas

//put function here
function Count(){
    let input= document.getElementById("input").value
    let isbad = document.getElementById("isbad")
    let number = document.getElementById("number")
    console.log(input);  

//lets go here
let splittext= input.split(" ");
console.log(splittext);

let i=0
let sum=0
let w=0

//all the possibilites go here
while(i<splittext.length){

    let word= (splittext[i]);
    i=i+1;
    console.log(word);
    console.log(splittext)
    
    //bad words are water, tires, and clear
    if(word=="water"){
        sum++;
        w=1;
        isbad.innerHTML="One or more bad word(s) found! Your mom would be disappointed!";
    }
    if (word == "tires"){
        sum++;
        w = 1;
        isbad.innerHTML = "One or more bad word(s) found! Your mom would be disappointed!";
    }
    if (word == "clear"){
        sum++;
        w=1;
        isbad.innerHTML = "One or more bad word(s) found! Your mom would be disappointed!";
    }

    //no bad words gos here
    if (w!=1){
        isbad.innerHTML = "No bad words found! Congrats!";
    }

    //console bits go here
    console.log("number of words = " + i);
     console.log(sum);
     number.innerHTML= (sum + " bad word(s) were found!")
}

//clear the box
var snatch= document.getElementById("input");
if (snatch.value !="") {
    snatch.value = "";
}
}