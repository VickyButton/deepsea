import { Game } from "@core/nodes/Game/Game.node"

/**
 * Creates an instance of the game.
 * @returns The game instance.
 */
export function createGame() {
    const game = new Game()

    return game
}