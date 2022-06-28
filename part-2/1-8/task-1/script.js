'use strict';

const showNotification = ({top = 0, right = 0, className, html}) => {
  const notificationElement = document.createElement('div');
  notificationElement.classList.add('notification');

  if (className) {
    notificationElement.classList.add(className);
  }

  notificationElement.style.top = `${top}px`;
  notificationElement.style.right = `${right}px`;
  notificationElement.innerHTML = html;

  document.body.append(notificationElement);

  setTimeout(() => notificationElement.remove(), 1500);
}

const welcomeNotificationOptions = {
  top: 10,
  right: 10,
  className: 'welcome',
  html: 'Hello!'
}

showNotification(welcomeNotificationOptions);
