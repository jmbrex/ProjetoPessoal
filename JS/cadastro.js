const InputName = document.getElementById("InputName");
const InputEmail = document.getElementById("InputEmail");
const InputSenha = document.getElementById("InputSenha");
const InputConfirmSenha = document.getElementById("InputSenhaConfirm");
const Form = document.getElementById("FormCadastro");

Form.addEventListener("submit", function(ev){
    ev.preventDefault();
    if(InputSenha.value === InputConfirmSenha.value){
        CriarCookie(InputName.value, "Name");
        CriarCookie(InputEmail.value, "Email");
        CriarCookie(InputSenha.value, "Senha");
        window.alert("successful registration "+getCookie("Name"))
    }
    
})


function CriarCookie(value, tag){
    var date = new Date();
    date.setTime(date.getTime()+(24*60*60*1000));
    var data = "expires="+date.toGMTString();
    const path = 'path=/;';
    document.cookie = tag+"="+value+";"+data+";"+path;
}

function getCookie(name) {
    let cookie = {};
    
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    
    return cookie[name];
    
  }

 