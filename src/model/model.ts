interface Entity {}
interface Message {
  type: string;
}
interface Command extends Message{}
interface Event extends Message{}

export {Entity, Message, Command, Event}
