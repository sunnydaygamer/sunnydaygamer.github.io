let counter = document.getElementById("counter");

for(var i = 1000; i < 5000; i++)
{
    counter.innerHTML += i + " number <br/>";

    console.log(i);

}

console.log("Done! final i value: " + i);