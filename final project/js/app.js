var player = "X"
function place(box) {
  if(box.innerHTML!==""){
    return;
  }

  box.innerHTML = player;
  if(player == "X"){
    player = "0";
  }else{
    player = "X"
  }
}