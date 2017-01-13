var snOpen = document.getElementById("sn-open");
var snClose = document.getElementById("sn-close");
var sn = document.getElementById("sn");

snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);


function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}

// console.log(snOpen, sn, snClose);
