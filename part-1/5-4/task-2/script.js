'use strict';

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';

styles.splice(0, 1);

alert(styles);

styles.unshift('Рэп', 'Регги');

