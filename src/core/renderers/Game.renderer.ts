import { Renderer } from "@core/components/Renderer.component"
import { Game, GameState } from "@core/nodes/Game/Game.node"
import { createCanvas } from "@core/utils/createCanvas"

export class GameRenderer extends Renderer<GameState, Game> {
    public render(node: Game) {
        const { state } = node
        const [canvas, ctx] = createCanvas(0, 0)

        return canvas
    }
}