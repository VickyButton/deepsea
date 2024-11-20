import { GameError } from "@core/components/GameError.component"


export class TestError extends GameError {
    public errorCode = 'TEST_ERROR'
    public message = 'This is a test error. Gadzooks!'
}