import { Node } from "@core/components/Node.component"
import { EventListenerGeneric } from "@core/interfaces/EventListenerGeneric"

export interface EventDelegatorState<T extends WindowEventMap[keyof WindowEventMap] = Event> {
    eventType: keyof WindowEventMap
    eventListeners: EventListenerGeneric<T>[]
    iterateOnUpdate: boolean
    lastEvent?: T
}

/**
 * Stores event listeners for a specified event type and calls them on the next available frame to reduce the number of event listeners.
 */
export class EventDelegator<T extends WindowEventMap[keyof WindowEventMap] = Event> extends Node<EventDelegatorState<T>> {
    /**
     * Bound event listener for the specified event type events.
     */
    private boundOnEvent = this.onEvent.bind(this)

    constructor(id: string, { eventType }: { eventType: keyof WindowEventMap }) {
        super(id, {
            eventType,
            eventListeners: [],
            lastEvent: undefined,
            iterateOnUpdate: false
        })
    }

    /**
     * Event listener for the specified event type events.
     * @param e The event value.
     */
    private onEvent<K extends keyof WindowEventMap>(e: WindowEventMap[K]) {
        this.state.write('iterateOnUpdate', true)
    }

    /**
     * Iterates each event listener and calls them.
     * @param e The event value.
     */
    private iterateEventListeners(e: T) {
        for (const eventListener of this.state.read('eventListeners')) eventListener(e)
    }

    /**
     * Adds an event listener.
     * @param eventListener The event listener being added.
     */
    public addEventListener(eventListener: EventListenerGeneric<T>) {
        const [eventListeners, setEventListeners] = this.state.use('eventListeners')

        setEventListeners([...eventListeners, eventListener])
    }

    /**
     * Removes a specified event listener.
     * @param eventListener The event listener being removed.
     */
    public removeEventListener(eventListener: EventListenerGeneric<T>) {
        const eventListeners = this.state.read('eventListeners')

        eventListeners.splice(eventListeners.indexOf(eventListener), 1)
    }

    public start() {
        window.addEventListener(this.state.read('eventType'), this.boundOnEvent)
    }

    public stop() {

    }

    public update(dt: number) {
        const lastEvent = this.state.read('lastEvent')

        if (this.state.read('iterateOnUpdate') && lastEvent) this.iterateEventListeners(lastEvent)
    }
}