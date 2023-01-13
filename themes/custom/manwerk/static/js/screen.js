

console.log('screen.js loaded');

const setScreen = () => {
    const doc = document.documentElement;
    doc.style.setProperty( '--screen-height', `${window.innerHeight}px`);
    console.log( `Sreen is ${window.innerHeight}px` );
}

window.addEventListener( 'resize', setScreen );

document.addEventListener("DOMContentLoaded", () => {

    setScreen();

});
