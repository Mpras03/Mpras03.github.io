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