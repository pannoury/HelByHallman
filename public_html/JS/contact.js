import * as navbar from "./Components/navbar.js";
import * as footer from "./Components/footer.js";

window.onload = () => {
    scrollTo(0,0);
    footer.updateCopyRightYear();
    navbar.navbarListClick();
}

window.onscroll = () => {
    navbar.scrollDetect()
}

document.getElementById('form-btn').onclick = () => {
    var inputs = document.querySelectorAll('.contact-input');
    for(let i=0; i<inputs.length; i++){
        console.log(inputs[i].value)
    }
}