function toggleMenu(){
    const menuBox=document.getElementById("menu-box");
    if(menuBox.style.width == "0px"){
        menuBox.style.width = "80%";
    }else{
        menuBox.style.width = "0px";
    }

}