'use strict';

const fieldElement = document.querySelector('#field');

const fieldCoordinates = fieldElement.getBoundingClientRect();

const topLeftOuterCornerCoordinates = [
  fieldCoordinates.left,
  fieldCoordinates.top
];

const bottomRightOuterCornerCoordinates = [
  fieldCoordinates.right,
  fieldCoordinates.bottom
];

const topLeftInnerCornerCoordinates = [
  fieldCoordinates.left + fieldCoordinates.clientLeft,
  fieldCoordinates.top + fieldCoordinates.clientTop
];

const bottomRightInnerCornerCoordinates = [
  fieldCoordinates.left + fieldCoordinates.clientLeft + fieldCoordinates.clientWidth,
  fieldCoordinates.top + fieldCoordinates.clientTop + fieldCoordinates.clientHeight
];
