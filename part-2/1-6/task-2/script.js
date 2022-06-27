'use strict';

const externalLinksElements = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])');

for (let linkElement of externalLinksElements) {
  linkElement.style.color = 'orange';
}
