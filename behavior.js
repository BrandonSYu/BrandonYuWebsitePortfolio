document.addEventListener("DOMContentLoaded", function(event) {
var thumbnailElement = document.getElementById("smart_thumbnail");
document.getElementById("smart_thumbnail").style.width = "300px";
thumbnailElement.addEventListener("click", function() {
    
    if(document.getElementById("smart_thumbnail").style.width == "300px"){
        document.getElementById("smart_thumbnail").style.width = "700px"
    }
    else{
        document.getElementById("smart_thumbnail").style.width = "300px";
    }
});
});