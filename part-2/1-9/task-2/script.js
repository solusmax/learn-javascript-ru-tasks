'use strict';

const getScrollbarWidth = () => {
  const divElement = document.createElement('div');

  divElement.style.width = '50px';
  divElement.style.height = '50px';
  divElement.style.overflow = 'hidden';
  divElement.style.position = 'absolute';
  divElement.style.top = '-200px';
  divElement.style.left = '-200px';

  const divInnerElement = document.createElement('div');
  divInnerElement.style.height = '100px';

  divElement.appendChild(divInnerElement);
  document.body.appendChild(divElement);

  const widthBefore = divInnerElement.clientWidth;
  divElement.style.overflowY = 'scroll';
  const widthAfter = divInnerElement.clientWidth;

  divElement.removeChild(divInnerElement);
  document.body.removeChild(divElement);

  return widthBefore - widthAfter;
};
