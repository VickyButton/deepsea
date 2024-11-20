import { Node } from "@core/components/Node.component"
import { Vector2D } from "@core/interfaces/Vector2D"

export interface GameState {
    sessionStart: number
    title: string
    aspectRatio: Vector2D
}

export class Game extends Node<GameState> {
    constructor() {
        super('Game', {
            sessionStart: Date.now(),
            title: "",
            aspectRatio: [0, 0]
        })
    }

    /**
     * Writes the game title to the document title.
     */
    private writeTitle() {
        document.title = this.state.read('title')
    }

    public start() {
        this.writeTitle()
    }

    public update(dt: number) { }
}