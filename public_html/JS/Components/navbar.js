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
        var btn = document.getElementById('mobile-navlist-btn');
        if(attribute === "hidden"){
            element.setAttribute('aria-label', 'displayed')
            element.style.width = "100vw"
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>`
        }
        else{
            element.setAttribute('aria-label', 'hidden')
            element.style.width = "0vw"
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`
        }
    })

}

export { scrollDetect, navbarListClick }