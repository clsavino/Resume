var slideInterval = 3500;
/* Return array of all figure elements in section with id Carousel*/

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}

/*The moveForward function iterates over the figure elements in the section element. It removes the visible class from the current figure element, then adds the class to the next figure element. Once complete, it uses the setTimeout function to invoke itself again after a specified amount of time (3500 milliseconds = 3.5 seconds).*/
function moveForward() {
    var pointer;
    var figures = getFigures();
    /*console.log(figures);*/
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

/* The JavaScript logic simply adds the visible CSS class to the next image in the rotation approximately every 3.5 seconds. */
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}

startPlayback();
