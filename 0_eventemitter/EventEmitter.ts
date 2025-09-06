export default class CustomEvenEmitter {
  private listeners: Record<string, Array<(...agrs: any) => any>>;

  constructor() {
    this.listeners = {};
  }
  //  add an listner to an event
  addListeners(eventName: string, fn: (...args: any[]) => any) {
    const listener = this.listeners[eventName];
    if (listener) {
      this.listeners[eventName]?.push(fn);
    } else {
      this.listeners[eventName] = [fn];
    }
  }

  // emit the event or events
  emitEvent(eventName: string, ...args: any[]) {
    const listener = this.listeners[eventName];
    if (listener) {
      listener.map((val) => {
        val(...args);
      });
    } else {
      console.error("Can not find the Event Name :", eventName);
    }
  }
  //  emit the event or events onces
  emitEventOnce(eventName: string, ...args: any[]) {
    const listener = this.listeners[eventName];
    if (listener) {
      listener.map((val) => {
        val(...args);
      });
      delete this.listeners[eventName];
    }
  }
}
