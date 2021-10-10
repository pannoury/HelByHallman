function scrollDetect(){
    var yDimension = window.pageYOffset;
    var width = window.innerWidth;
    const navbar = document.getElementsByTagName('header')[0];
    if(yDimension > 0){
        if(width > 875){
            navbar.style.backgroundColor = "#fff";
        }
    }
    else if(yDimension === 0){
        navbar.style.backgroundColor = "";
    }
}

export { scrollDetect }