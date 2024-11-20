import { GameError } from "@core/components/GameError.component"
import { Interpreter } from "@core/components/Interpreter.component"
import { Log } from "@core/interfaces/Log"

export class GameErrorInterpreter extends Interpreter<GameError> {
    public toLog({ errorCode, message, origin }: GameError): Log {
        const tags = ['Error', errorCode, origin]

        return { tags, message }
    }
}