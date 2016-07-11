import { Template } from 'meteor/templating';
import { Chats } from '../api/chats';

import './body.html';

Template.body.helpers({
  chats() {
    return Chats.find({}, {
      sort: {
        waktu: -1
      }
    });
  }
});
