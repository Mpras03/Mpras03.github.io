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