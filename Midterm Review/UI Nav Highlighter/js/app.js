//Nav div
let navCollection = document.getElementById('navCollection');

//called onclick in html
function uiNavHighlight(divHighlight)
{
    //grab the other elements
    uiNavDivs = document.getElementsByClassName('uiNav');

    //For each element in uiNavDivs, then reset style
    for (i = 0; i < uiNavDivs.length; i++)
    {
        let indexedElement = uiNavDivs.item(i);
        indexedElement.style.backgroundColor = "#EB4043";
        indexedElement.style.fontWeight = "bold";
        indexedElement.style.color = "#000000";
    }

    //After reset is done, style the clicked div, then add inner html
    divHighlight.style.backgroundColor = "#218014";
    divHighlight.style.fontWeight = "bold";
    divHighlight.style.color = "#FFFFFF";
    navCollection.innerHTML += " " + divHighlight.innerHTML;
}