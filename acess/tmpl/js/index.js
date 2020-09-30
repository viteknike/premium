window.onload = function(){
    var doc = document.querySelector('.hamburger');
    doc.onclick = function MenuToggle() {
        doc.classList.toggle('hamburger-active');
    }
}