'use strict';

const room = {
  number: 23
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [
    {
      name: 'Иванов'
    },
    {
      name: 'Петров'
    }
  ],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, (key, value) => key !== '' && value === meetup ? undefined : value));
