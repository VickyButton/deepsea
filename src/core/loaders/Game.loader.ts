import { Loader } from "@core/components/Loader.component"
import JsonLoader from "@core/loaders/Json.loader"
import { Game, GameState } from "@core/nodes/Game/Game.node"

export class GameLoader extends Loader<void, Game> {
    public async load(from: Game) {
        const { state } = from
        const config = await JsonLoader.load<Partial<GameState>>('config/Game.config.json')

        state.write('sessionStart', Date.now())
        state.write('title', config.title ?? 'DeepSea')
    }
}

export default new GameLoader()