function toggleStyleSheet(){

    var styleSheet= document.getElementById("mainStyleSheet");
 
    var curr_sheet= styleSheet.getAttribute("href");
  
    if (curr_sheet != "style2.css"){
        curr_sheet = "style2.css";
    }
    else{
        curr_sheet = "style.css";
    }
    styleSheet.setAttribute("href", curr_sheet);
    
    localStorage.setItem("style_ref", curr_sheet);
}

window.onload = function(){
    
    var curr_sheet = localStorage.getItem("style_ref");
    var styleSheet= document.getElementById("mainStyleSheet");
    if (curr_sheet == null) {
        styleSheet.setAttribute("href", "style.css");
    }
    else{
        styleSheet.setAttribute("href", curr_sheet);
    }
    
}