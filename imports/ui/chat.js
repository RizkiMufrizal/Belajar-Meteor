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
