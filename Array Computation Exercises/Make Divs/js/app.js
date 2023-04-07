//put array here, grabbed from canvas, and just  a div on the main page
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
   ];

//only need one of these?? its called box
let box = document.getElementById("box");

   //put loop here, first is creating div, background color, height/width
   for (let i = 0; i < objects.length; i++) {
     let object = objects[i];
     let divElement = document.createElement("div");
     divElement.style.backgroundColor = object.color;
     divElement.style.height = object.height + "px";
     divElement.style.width = object.width + "px";

     //put it on page, appending child here
     box.appendChild(divElement);
   }