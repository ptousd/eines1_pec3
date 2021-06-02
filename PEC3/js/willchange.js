var elems = document.querySelectorAll('.changeable');

elems.forEach(el => {
    el.addEventListener('mouseenter', hintBrowser);
    el.addEventListener('mouseleave', removeHint);
});

function hintBrowser() {
  console.log("Dentor");
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
console.log("Fuera");
  this.style.willChange = 'auto';
}
