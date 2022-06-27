'use strict';

for (let li of document.querySelectorAll('li')) {
  console.log(`${li.firstChild.textContent.trim()} (число потомков: ${li.querySelectorAll('li').length})`);
}
