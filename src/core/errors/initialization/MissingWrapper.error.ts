import { GameError } from "@core/components/GameError.component"

export class MissingWrapperError extends GameError {
    public errorCode = 'MISSING_WRAPPER'
    public message = 'Could not find canvas wrapper element with the id "deepsea".'
}