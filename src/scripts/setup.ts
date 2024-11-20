import { GameError } from "@core/components/GameError.component"
import { Logger } from "@core/components/Logger.component"
import { GameErrorInterpreter } from "@core/interpreters/GameError.interpreter"
import GameLoader from "@core/loaders/Game.loader"
import GameLoopLoader from "@core/loaders/GameLoop.loader"
import { createGame } from "./createGame"
import { createGameCanvas } from "./createGameCanvas"
import { createGameLoop } from "./createGameLoop"

/**
 * Sets up and components needed to run the game.
 */
export async function setup() {
    const logger = new Logger()
    const gameErrorInterpreter = new GameErrorInterpreter()

    try {
        const [canvas, ctx] = createGameCanvas()
        const gameLoop = createGameLoop()
        const game = createGame()

        await GameLoopLoader.load(gameLoop)
        await GameLoader.load(game)

        gameLoop.addStep((dt: number) => game.update(dt))
        gameLoop.start()
    }
    catch (err) {
        if (err instanceof GameError) logger.log(gameErrorInterpreter.toLog(err))
    }
}