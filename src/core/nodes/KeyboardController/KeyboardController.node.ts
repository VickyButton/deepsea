import { Node } from "@core/components/Node.component"

export interface KeyboardControllerState {
    [key: string]: boolean
}

export class KeyboardController extends Node<KeyboardControllerState> {
    /**
     * Bound keydown event listener.
     */
    private boundOnKeydown = this.onKeydown.bind(this)

    /**
     * Bound keyup event listener.
     */
    private boundOnKeyup = this.onKeyup.bind(this)

    /**
     * Event listener for keydown events.
     * @param event Keydown event.
     */
    private onKeydown({ key }: KeyboardEvent) {
        const { state } = this

        if (state.read(key) !== true) state.write(key, true)
    }

    /**
     * Event listener for keyup events.
     * @param event Keyup event.
     */
    private onKeyup({ key }: KeyboardEvent) {
        const { state } = this

        if (state.read(key) !== false) state.write(key, false)
    }

    public start() {
        window.addEventListener('keydown', this.boundOnKeydown)
        window.addEventListener('keyup', this.boundOnKeyup)
    }

    public stop() {
        window.removeEventListener('keydown', this.boundOnKeydown)
        window.removeEventListener('keyup', this.boundOnKeyup)
    }

    public update(dt: number) { }
}