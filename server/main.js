import { Meteor } from 'meteor/meteor';
import { Chats } from '../imports/api/chats';

Meteor.startup(() => {
  if (Chats.find().count() === 0) {
    const chats = [{
      'id': '1',
      'nama': 'rizki',
      'pesan': 'hy...',
      'waktu': new Date()
    }, {
      'id': '2',
      'nama': 'mufrizal',
      'pesan': 'hy juga...',
      'waktu': new Date()
    }];

    chats.forEach((chat) => {
      Chats.insert(chat)
    });
  }

});
