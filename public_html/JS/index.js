import * as navbar from "./Components/navbar.js";

window.onload = () => {
    scrollTo(0,0);

}

window.onscroll = () =>{
    navbar.scrollDetect();
}