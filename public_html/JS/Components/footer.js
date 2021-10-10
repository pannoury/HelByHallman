function updateCopyRightYear(){
    document.getElementById('copyright-text-footer').innerHTML = `&copy; ${new Date().getFullYear()} HelByHallman`;
}

export { updateCopyRightYear }