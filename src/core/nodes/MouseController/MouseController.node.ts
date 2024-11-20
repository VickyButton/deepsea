import { Node } from "@core/components/Node.component"
import { Vector2D } from "@core/interfaces/Vector2D"

export interface MouseControllerState {
    isMouseDown: boolean
    mouse: Vector2D
    mousedown: Vector2D
    mouseup: Vector2D
}

/**
 * Tracks mouse movements and actions as state
 */
export class MouseController extends Node<MouseControllerState> {
    /**
     * Bound mousedown event listener.
     */
    private boundOnMousedown = this.onMousedown.bind(this)

    /**
     * Bound mouseup event listener.
     */
    private boundOnMouseup = this.onMouseup.bind(this)

    /**
     * Bound mousemove event listener.
     */
    private boundOnMousemove = this.onMousemove.bind(this)

    /**
     * Event listener for mousedown events.
     * @param event Mousedown event.
     */
    private onMousedown({ clientX, clientY }: MouseEvent) {
        this.state.write('mousedown', [clientX, clientY])
    }

    /**
     * Event listener for mouseup events.
     * @param event Mouseup event.
     */
    private onMouseup({ clientX, clientY }: MouseEvent) {
        this.state.write('mouseup', [clientX, clientY])
    }

    /**
     * Event listener for mousemove events.
     * @param event Mousemove event.
     */
    private onMousemove({ clientX, clientY }: MouseEvent) {
        this.state.write('mouse', [clientX, clientY])
    }

    public start() {
        window.addEventListener('mousedown', this.boundOnMousedown)
        window.addEventListener('mouseup', this.boundOnMouseup)
        window.addEventListener('mousemove', this.boundOnMousemove)
    }

    public stop() {
        window.removeEventListener('mousedown', this.boundOnMousedown)
        window.removeEventListener('mouseup', this.boundOnMouseup)
        window.removeEventListener('mousemove', this.boundOnMousemove)
    }

    public update(dt: number) { }
}