function abrirConfig(){
    let configTrue = document.getElementById('configTrue');
    let btnConfig = document.getElementById('btnbutton');
    let btnTexto = document.getElementById('btnTexto');


    if(configTrue.style.display != "block"){
        configTrue.style.display = "block";
        btnConfig.style.borderRadius = "7px 7px 0 0";
        btnTexto.textContent = "Configurações Avançadas ▲"

    }else{
        configTrue.style.display = "none";
        btnConfig.style.borderRadius = "7px";
        btnTexto.textContent = "Configurações Avançadas ▼"
    }
}