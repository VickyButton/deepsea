/**
 * Creates a canvas and its rendering context.
 * @param width The width of the canvas, in pixels.
 * @param height The height of the canvas, in pixels.
 * @returns A tuple containing the canvas and its rendering context.
 */
export function createCanvas(width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!

    canvas.width = width
    canvas.height = height

    return [canvas, ctx]
}