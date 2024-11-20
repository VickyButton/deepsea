import { MissingWrapperError } from "@core/errors/initialization/MissingWrapper.error"
import { createCanvas } from "@core/utils/createCanvas"
import { resizeCanvas } from "@core/utils/resizeCanvas"

/**
 * Creates and appends the game canvas to the wrapper.
 * @returns A tuple containing the canvas and its context.
 */
export function createGameCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const wrapper = document.getElementById('deepsea')

    if (wrapper === null) throw new MissingWrapperError()

    const [canvas, ctx] = createCanvas(wrapper.offsetWidth, wrapper.offsetHeight)
    const onResize = () => resizeCanvas(canvas, wrapper.offsetWidth, wrapper.offsetHeight)

    wrapper.appendChild(canvas)

    window.addEventListener('resize', onResize)

    return [canvas, ctx]
}