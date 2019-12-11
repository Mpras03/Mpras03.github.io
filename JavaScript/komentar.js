var datakomen = [
    
];


function tampilkan(){
    var listkomen = document.getElementById("komentar");
    listkomen.innerHTML = "";

    for(let i = 0; i < datakomen.length; i++){
        var btnEdit = "<a href='#' onclick='editkomen("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deletekomen("+i+")'>Hapus</a>";

        listkomen.innerHTML += "<p>" + datakomen[i] + " ["+btnEdit + " | "+ btnHapus +"]</p>";        
    }
}

function tambahkomen(){
    var input = document.querySelector("input[name=komentar]");
    datakomen.push(input.value);
    tampilkan();
}

function editkomen(id){
    var newkomen = prompt("Komentar Baru", datakomen[id]);
    datakomen[id] = newkomen;
    tampilkan();
}

function deletekomen(id){
    datakomen.splice(id, 1);
    tampilkan();
}

tampilkan();


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var url = "https://raw.githubusercontent.com/Mpras03/Mpras03.github.io/master/ajax.txt";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", url , true);
  xhttp.send();
}



var modal = document.getElementById("myModal");

var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

