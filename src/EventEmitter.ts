type EventHandler = (data: any) => void;

class EventEmitter {
  private eventHandlers: { [eventName: string]: EventHandler[] } = {};

  public on(eventName: string, handler: EventHandler): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }

    this.eventHandlers[eventName]!.push(handler);
  }

  public off(eventName: string, handler: EventHandler): void {
    const handlers = this.eventHandlers[eventName];

    if (handlers) {
      this.eventHandlers[eventName] = handlers.filter(h => h !== handler);
    }
  }

  public emit(eventName: string, data: any): void {
    const handlers = this.eventHandlers[eventName];

    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }
}

export const eventEmitter = new EventEmitter();
