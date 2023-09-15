function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleSheet= document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var curr_sheet= styleSheet.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    if (curr_sheet != "style2.css"){
        curr_sheet = "style2.css";
    }
    else{
        curr_sheet = "style.css";
    }
    styleSheet.setAttribute("href", curr_sheet);
    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    // if (!curr_sheet.endsWith("2.css"))
    localStorage.setItem("style_ref", curr_sheet);
}

window.onload = function(){
    
    // 2 (a) Get stylesheet name from local storage hint: localStorage.getItem(name)
    var curr_sheet = localStorage.getItem("style_ref");
    var styleSheet= document.getElementById("mainStyleSheet");
    if (curr_sheet == null) {
        // 2 (c) Replace href attribute of html element.
        styleSheet.setAttribute("href", "style.css");
    }
    styleSheet.setAttribute("href", curr_sheet);
}