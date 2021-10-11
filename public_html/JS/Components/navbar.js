function scrollDetect(){
    var yDimension = window.pageYOffset;
    var width = window.innerWidth;
    var navbar = document.getElementsByTagName('header')[0];
    if(yDimension > 0){
        if(width > 875){
            navbar.style.backgroundColor = "#fff";
        }
    }
    else if(yDimension === 0){
        navbar.style.backgroundColor = "";
    }
}
function navbarListClick(){
    document.getElementById('mobile-navlist-btn').addEventListener('click', function(){
        var element = document.getElementById('navbar-mobile-extended');
        var attribute = element.getAttribute('aria-label');
        if(attribute === "hidden"){
            element.setAttribute('aria-label', 'displayed')
            element.style.width = "100vw"
        }
        else{
            element.setAttribute('aria-label', 'hidden')
            element.style.width = "0vw"
        }
    })

}

export { scrollDetect, navbarListClick }