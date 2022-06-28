'use strict';

const positionAt = (anchor, position, elem) => {
  const anchorCoordinates = anchor.getBoundingClientRect();

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
