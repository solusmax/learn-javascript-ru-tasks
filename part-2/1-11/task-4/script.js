'use strict';

const positionAt = (anchor, position, elem) => {
  const anchorCoordinates = getCoordinates(anchor);

  switch (position) {
    case 'top-out':
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top - elem.offsetHeight}px`;
      break;

    case 'right-out':
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth}px`;
      elem.style.top = `${anchorCoordinates.top}px`;
      break;

    case 'bottom-out':
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight}px`;
      break;

    case 'top-in':
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top}px`;
      break;

    case 'right-in':
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth - elem.offsetWidth}px`;
      elem.style.top = `${anchorCoordinates.top}px`;
      break;

    case 'bottom-in':
      elem.style.left = `${anchorCoordinates.left}px`;
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight - elem.offsetHeight}px`;
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

showNote(blockquote, 'top-out', 'note top-out');
showNote(blockquote, 'right-out', 'note right-out');
showNote(blockquote, 'bottom-out', 'note bottom-out');
showNote(blockquote, 'top-in', 'note top-in');
showNote(blockquote, 'right-in', 'note right-in');
showNote(blockquote, 'bottom-in', 'note bottom-in');
