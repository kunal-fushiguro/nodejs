// import events from "events";

// class Emitter extends events {}

// const myEvent = new Emitter();

// myEvent.on("foo", () => {
//   console.log("Event Occured :Fooo");
// });

// myEvent.emit("foo");
import CustomEvenEmitter from "./EventEmitter";

const events = new CustomEvenEmitter();

events.addListeners("foo", () => {
  console.log("Event Occured :Fooo");
});
events.addListeners("foo", (x) => {
  console.log("Event Occured :Fooo", x);
});

events.emitEvent("foo");
events.emitEvent("foo", 12);
events.emitEventOnce("foo", 12);
events.emitEvent("foo");
