let favoriteThings = document.getElementById("favoriteThings");

let favoriteThings1 = document.getElementById("favoriteThings1");

let favoriteThings2 = document.getElementById("favoriteThings2");

let favoriteThings3 = document.getElementById("favoriteThings3");

let favoriteThings4 = document.getElementById("favoriteThings4");

let favorites = ["Reading", "Art", "Critical Role", "Youtube", "Minecraft"];
for(let i = 0; i < 5; i++) {
    let itemAtIndex = favorites[i];
    console.log(itemAtIndex);
    let statement = favorites[0] + " is one of my favorite things."
    favoriteThings.innerHTML = statement;
}

let statement1 = favorites[1] + " is one of my favorite things."
    favoriteThings1.innerHTML = statement1;

let statement = favorites[2] + " is one of my favorite things."
    favoriteThings2.innerHTML = statement;
