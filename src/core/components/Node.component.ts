import { State } from "./State.component"

/**
 * The base component of a game object.
 */
export abstract class Node<T extends Object = Object> {
    /**
     * A UUID used to identify the node.
     */
    public readonly id: string

    /**
     * A model used to track the state of the node.
     */
    public readonly state: State<T>

    /**
     * The parent node of the node.
     */
    protected parent: Node | undefined

    /**
     * The child nodes of the node.
     */
    protected children: Node[] = []

    constructor(id: string, state: T) {
        this.id = id
        this.state = new State(state)
    }

    /**
     * Called at the end of the node's lifecycle.
     */
    public stop() { }

    /**
     * Called once after initialization.
     */
    public abstract start(): void

    /**
     * Called every frame the game updates.
     */
    public abstract update(dt: number): void
}