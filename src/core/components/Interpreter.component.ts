import { Log } from "@core/interfaces/Log"

/**
 * Interprets a value into a Log.
 */
export abstract class Interpreter<T> {
    public abstract toLog(loggable: T): Log
}