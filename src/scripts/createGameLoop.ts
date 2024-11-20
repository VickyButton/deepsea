import { GameLoop } from "@core/nodes/GameLoop/GameLoop.node"

/**
 * Creates an instance of the game loop.
 * @returns The game loop instance.
 */
export function createGameLoop() {
    const gameLoop = new GameLoop()

    return gameLoop
}