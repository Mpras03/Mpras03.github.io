function validasi(){
    var username = document.getElementById("nama");
    var password = document.getElementById("pw");
    var email    = document.getElementById("email");
    var ttl      = document.getElementById("ttl");

    if(username.value==""||password.value==""||email.value==""||ttl.value==""){
        alert("Inputan pada DAFTAR tidak boleh kosong!");
        return false;
    }
    else{
        true;

    }

}
function validasilogin(){
    var username    = document.getElementById("usernamelogin");
    var password    = document.getElementById("pwlogin");

    if(usernamelogin.value==""||password.value==""){
        alert("Inputan pada LOGIN tidak boleh kosong!");
        return false;
    }
    else{
        true;
    }
}

function tampilkanPreview(gambar,imgpreview){
    var gb = gambar.files;
    for (var i = 0; i < gb.length; i++){
        var gbPreview = gb[i];
        var imageType = /image.*/;
        var preview=document.getElementById(imgpreview);
        var reader = new FileReader();
        if (gbPreview.type.match(imageType)) {
            preview.file = gbPreview;
            reader.onload = (function(element) {
                return function(e) {
                    element.src = e.target.result;
                };
            })(preview);
            reader.readAsDataURL(gbPreview);
        }else{
            alert("Type file tidak sesuai. Khusus image.");
        }
    }
}