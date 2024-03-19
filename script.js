const contextmenu = document.querySelector('.container');
const submenu = document.querySelector('.share-menu');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;

    let windWidth = window.innerWidth;
    let windHeight = window.innerHeight;
    let cmWidght = contextmenu.offsetWidth;
    let cmheight = contextmenu.offsetHeight;

    x = x > windWidth - cmWidght ? windWidth - cmWidght : x;
    y = y > windHeight - cmheight ? windHeight - cmheight : y;
    
    if (x > windWidth - cmWidght - submenu.offsetWidth) {
        submenu.style.left = '-170px';
    } else {
        submenu.style.left = '260px';
    }

    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.visibility = 'visible';
})


window.addEventListener('click', () => {
    contextmenu.style.visibility = 'hidden';
})
