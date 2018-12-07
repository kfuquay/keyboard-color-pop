'use strict';

function reverseBackground(e) {
    const zone = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (zone.classList.contains('reverse') && zone.classList.contains('surprise')) {
        zone.innerHTML = 
        '<p>you found me</p>';
        removeReverse(e);
    }
    else if (zone.classList.contains('reverse')) {
        removeReverse(e);
    } else {
    zone.classList.add('reverse');
    }
}

function removeReverse(e) {
    const zone = document.querySelector(`div[data-key="${e.keyCode}"]`);
    zone.classList.remove('reverse');
}

window.addEventListener('keydown', reverseBackground);