import * as navbar from "./Components/navbar.js";
import * as footer from "./Components/footer.js";

window.onload = () => {
    scrollTo(0,0);
    footer.updateCopyRightYear();
    navbar.navbarListClick();
    servicesEventListener();
}

window.onscroll = () =>{
    navbar.scrollDetect();
}

function servicesEventListener(){
    var servicesBtn = document.querySelectorAll('.services-extendable-btn');
    for(let i=0; i<servicesBtn.length; i++){
        servicesBtn[i].addEventListener('click', function(){
            var ariaLabel = servicesBtn[i].getAttribute('aria-label');
            serviceButtons(servicesBtn[i], ariaLabel)
        })
    }
}

function serviceButtons(element, ariaLabel){
    if(ariaLabel === "hidden"){
        element.setAttribute('aria-label', 'visible');
        element.nextElementSibling.style.display = "block"
    }
    else{
        element.setAttribute('aria-label', 'hidden');
        element.nextElementSibling.style.display = "none"
    }
}