import events from "events";

class Emitter extends events {}

const myEvent = new Emitter();

myEvent.on("foo", () => {
  console.log("Event Occured :Fooo");
});

myEvent.emit("foo");
