// script.js

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}

// Open the default tab
document.addEventListener("DOMContentLoaded", function() {
    openTab('hero');
});
