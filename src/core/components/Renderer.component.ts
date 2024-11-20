import { Node } from "./Node.component"

/**
 * Renders a node into a canvas.
 */
export abstract class Renderer<S extends Object, T extends Node<S>> {
    public abstract render(node: T): HTMLCanvasElement
}