import _ from  "./app.js"
import "./assets/scss/style.scss"
const clickAnchor = (e) => {
    const src = e.srcElement
    if(src.href && !src.target){
        // e.preventDefault();
        // window.history.pushState( { ID: src.href }, "", src.href );
    }
}
document.addEventListener('click', function (e) {
    clickAnchor(e)
});