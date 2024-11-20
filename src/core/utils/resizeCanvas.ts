/**
 * Resizes a canvas.
 * @param canvas The canvas to be resized.
 * @param width The new width of the canvas, in pixels.
 * @param height The new height of the canvas, in pixels.
 */
export function resizeCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
    canvas.width = width
    canvas.height = height
}