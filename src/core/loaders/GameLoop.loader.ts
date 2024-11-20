import { Loader } from "@core/components/Loader.component"
import JsonLoader from "@core/loaders/Json.loader"
import { GameLoop, GameLoopState } from "@core/nodes/GameLoop/GameLoop.node"

export class GameLoopLoader extends Loader<void, GameLoop> {
    public async load(from: GameLoop) {
        const { state } = from
        const config = await JsonLoader.load<Partial<GameLoopState>>('config/GameLoop.config.json')

        state.write('fps', config.fps ?? 0)
        state.write('fpsInterval', 1000 / state.read('fps'))
    }
}

export default new GameLoopLoader()