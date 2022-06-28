'use strict';

const positionAt = (anchor, position, elem) => {
  const anchorCoordinates = getCoordinates(anchor);

  switch (position) {
    case 'top':
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top - elem.offsetHeight}px`;
      break;

    case 'right':
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth}px`;
      elem.style.top = `${anchorCoordinates.top}px`;
      break;

    case 'bottom':
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight}px`;
      break;
  }
}

const getCoordinates = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

const showNote = (anchor, position, html) => {
  const note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

const blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top', 'note above');
showNote(blockquote, 'right', 'note at the right');
showNote(blockquote, 'bottom', 'note below');
