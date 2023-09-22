const User = document.getElementById("InputUser");
const Senha = document.getElementById("InputSenha");
const BTlogin = document.getElementById("BTlogin");
const Form = document.getElementById("formLogin");

Form.addEventListener("submit", function(ev){
    ev.preventDefault();
    console.log("a")
    alert("aa")
    if(User.value === getCookie("Name") && (Senha.value === getCookie("Senha"))){
        window.location.href = "..\\HTML\\Menu.html"
    }else{
        window.alert("username or password is invalid!")
    }
})



function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
    
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }