/**
 * A custom error for game-related errors.
 */
export abstract class GameError extends Error {
    /**
     * A unique error identifier.
     */
    public readonly abstract errorCode: string

    /**
     * The message associated with the error.
     */
    public readonly abstract message: string

    /**
     * Where the error originates from.
     */
    public readonly origin: string

    constructor(origin: string = "Engine") {
        super()

        this.origin = origin
    }
}