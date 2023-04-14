//use the => thing bc I keep forgetting it exists, also query select for squares
document.querySelectorAll(".squares").forEach(item => {
    item.addEventListener('click', function(e) {
        item.style.backgroundColor = item.dataset.color;
    })
})
