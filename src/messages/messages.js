import Component from "can-component";
import DefineMap from "can-define/map/";
import "./messages.less";
import view from "./messages.stache";
import Message from "donejs-chat/models/message";

export const ViewModel = DefineMap.extend({
  name: "string",
  body: "string",
  send(event) {
    event.preventDefault();

    new Message({
      name: this.name,
      body: this.body
    }).save().then(msg => this.body = '');
  }
});

export default Component.extend({
  tag: 'chat-messages',
  ViewModel: ViewModel,
  view
});
