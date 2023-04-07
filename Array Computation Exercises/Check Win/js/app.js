let input = document.getElementById("input");
let div = document.getElementById("div");

function check() {
    let split = input.value;
    let array = split.split(",");
    if (Winner(array))
    {
        div.innerHTML = "You win! Congrats!";
    }
    else
    {
        div.innerHTML = "You lose! Good day, sir!";
    }
    input.value = "";
}

function Winner(grabArray)
{
    let row = 0;
    for (let i = 0; i < grabArray.length; i++)
    {
        console.log(grabArray[i]);
        if (Number(grabArray[i]) === 1)
        {
            row++;
            console.log("1s: " + row);
            if (r === 3)
            {
                return true;
            }
        }
        else
        {
            row = 0;
        }
    }
    return false;
}