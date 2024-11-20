import { Node } from "@core/components/Node.component"

export interface GameLoopState {
    isLooping: boolean
    fps: number
    fpsInterval: number
    then: number
    now: number
}

export class GameLoop extends Node<GameLoopState> {
    /**
     * Functions that are called each loop.
     */
    private steps: ((dt: number) => void)[] = []

    constructor() {
        super('GameLoop', {
            isLooping: false,
            fps: 0,
            fpsInterval: 0,
            then: 0,
            now: 0
        })
    }

    /**
     * Iterates through steps and calls each one.
     */
    private loop(dt: number) {
        for (const step of this.steps) step(dt)
    }

    /**
     * Adds a step to be called each loop.
     * @param step The step function being added.
     */
    public addStep(step: (dt: number) => void) {
        this.steps.push(step)
    }

    public start() {
        const { state } = this

        state.write('isLooping', true)
        state.write('then', window.performance.now())

        this.update()
    }

    public stop() {
        this.state.write('isLooping', false)
    }

    public update() {
        const { state } = this

        if (!state.read('isLooping')) return

        requestAnimationFrame(this.update.bind(this))

        state.write('now', window.performance.now())

        const dt = state.read('now') - state.read('then')

        if (dt <= state.read('fpsInterval')) return

        state.write('then', state.read('now') - (dt % state.read('fpsInterval')))

        this.loop(dt)
    }
}