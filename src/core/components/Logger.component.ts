import { Log } from "@core/interfaces/Log"

/**
 * Stores and writes logs.
 */
export class Logger {
    /**
     * An array of logs, in order of oldest to newest.
     */
    public readonly logs: Log[] = []

    /**
     * Converts an array of tags into a string.
     * @param tags An array of tags for the log.
     * @returns A string of tags, each enclosed in square brackets.
     */
    private joinTags(tags: string[]) {
        return `[${tags.join('][')}]`
    }

    /**
     * Writes the current timestamp as a string.
     * @returns A string containing representing the current timestamp.
     */
    private getDate() {
        return Date.now().toString()
    }

    /**
     * Stores a log and writes it to the console.
     * @param log A log object containing a tag array and a message.
     */
    public log(log: Log) {
        this.logs.push(log)

        console[log.tags.includes('Error') ? 'error' : 'log'](`${this.joinTags([this.getDate(), ...log.tags])} ${log.message}`)
    }
}