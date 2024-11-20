import { Node } from "@core/components/Node.component"

export interface LayerState {
    z: number
}

/**
 * A node that separates interfaces into a visual hierachy.
 */
export class Layer extends Node<LayerState> {
    public start() {

    }

    public update(dt: number) {

    }
}