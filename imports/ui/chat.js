import { Template } from 'meteor/templating';
import { Chats } from '../api/chats';

import './chat.html';

Template.body.helpers({
  chats() {
    return Chats.find({}, {
      sort: {
        waktu: -1
      }
    });
  }
});

Template.body.events({
  'submit #form-kirim-pesan'(event) {
    event.preventDefault();

    Chats.insert({
      'nama': event.target.nama.value,
      'pesan': event.target.pesan.value,
      'waktu': new Date()
    });

    event.target.nama.value = '';
    event.target.pesan.value = '';
  }
});
