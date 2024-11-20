import { Node } from "@core/components/Node.component"
import { Vector2D } from "@core/interfaces/Vector2D"

export interface ScreenState {
    size: Vector2D
}

export class Screen extends Node<ScreenState> {
    /**
     * Bound resize event listener
     */
    private boundOnResize = this.onResize.bind(this)

    /**
     * Retrieves the document body dimensions.
     * @returns The document body dimensions.
     */
    private getBodySize(): Vector2D {
        return [document.body.clientWidth, document.body.clientHeight]
    }

    /**
     * Sets the size state to the document body dimensions.
     */
    private syncSize() {
        this.state.write('size', this.getBodySize())
    }

    /**
     * Event listener for resize events.
     */
    private onResize() {
        this.syncSize()
    }

    public start() {
        window.addEventListener('resize', this.boundOnResize)
    }

    public stop() {
        window.removeEventListener('resize', this.boundOnResize)
    }

    public update(dt: number) {

    }
}