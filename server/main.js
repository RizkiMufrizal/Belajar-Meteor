import { Meteor } from 'meteor/meteor';
import { Chats } from '../imports/api/chats';

Meteor.startup(() => {
  Chats.remove({});
  if (Chats.find().count() === 0) {
    const chats = [{
      'nama': 'rizki',
      'pesan': 'hy...',
      'waktu': new Date()
    }, {
      'nama': 'mufrizal',
      'pesan': 'hy juga...',
      'waktu': new Date("October 13, 2015 11:13:00")
    }];

    chats.forEach((chat) => {
      Chats.insert(chat)
    });
  }

});
