/**
 * A model used to track state properties.
 */
export class State<T extends Object = {}> {
    /**
     * Contains the previous values of the state properties.
     */
    public readonly previous: T

    /**
     * Contains the current values of the state properties.
     */
    public readonly current: T

    constructor(current: T) {
        this.previous = current
        this.current = current
    }

    /**
     * Gets the current value of a property.
     * @param key The key of the property being accessed.
     * @returns The current value of the property.
     */
    public read<K extends keyof T>(key: K): T[K] {
        return this.current[key]
    }

    /**
     * Gets the previous value of a property.
     * @param key The key of the property being accessed.
     * @returns The previous value of the property.
     */
    public readPrevious<K extends keyof T>(key: K): T[K] {
        return this.previous[key]
    }

    /**
     * Sets the previous value of a property to the current value and sets the current value to the new value.
     * @param key The key of the property being written to.
     * @param value The new value of the property being written to.
     */
    public write(key: keyof T, value: T[keyof T]) {
        this.previous[key] = this.current[key]
        this.current[key] = value
    }

    /**
     * Reverts the current value of a property to the previous value
     * @param key The key of the property being reverted
     * @returns The new value of the property
     */
    public revert(key: keyof T) {
        this.current[key] = this.previous[key]

        return this.current[key]
    }

    /**
     * Creates a tuple containing a property value and a setter for that property.
     * @param key The key of the property being used.
     * @returns A tuple containing the property value and the property setter.
     */
    public use<K extends keyof T>(key: K): [T[K], (value: T[K]) => void] {
        let read = this.read(key)
        const write = (value: T[K]) => {
            this.write(key, value)

            read = this.read(key)
        }

        return [read, write]
    }
}