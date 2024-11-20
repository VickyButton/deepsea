import { Vector2D } from "@core/interfaces/Vector2D"

/**
 * Contains functions for 2D vector math.
 */
export class VectorMath2D {
    /**
     * Adds two vectors or a vector and a number.
     * @param v1 - The first vector.
     * @param v2 - The second vector or a number.
     * @returns The resulting vector sum.
     */
    public sum(v1: Vector2D, v2: Vector2D | number): Vector2D {
        if (typeof v2 == 'number') v2 = this.toVector2D(v2)

        return [v1[0] + v2[0], v1[1] + v2[1]]
    }

    /**
     * Multiplies a vector and another vector or a scalar together.
     * @param v1 - The first vector.
     * @param v2 - The second vector or a scalar.
     * @returns The resulting vector product.
     */
    public scale(v1: Vector2D, v2: Vector2D | number): Vector2D {
        if (typeof v2 == "number") v2 = this.toVector2D(v2)

        return [v1[0] * v2[0], v1[1] * v2[1]]
    }

    /**
     * Checks if two vectors are equal.
     * @param v1 - The first vector.
     * @param v2 - The second vector.
     * @returns True if the vectors are equal, false if unequal.
     */
    public equals(v1: Vector2D, v2: Vector2D) {
        return (v1[0] == v2[0]) && (v1[1] == v2[1])
    }

    /**
     * Normalizes a vector.
     * @param vector The vector being normalized.
     * @returns The normalized vector.
     */
    public normalize(vector: Vector2D) {
        return this.scale(vector, (1 / this.magnitude(vector)))
    }

    /**
     * Calculates the magnitude of a vector.
     * @param vector The vector.
     * @returns The magnitude of the vector.
     */
    public magnitude(vector: Vector2D) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2))
    }

    /**
     * Converts a number or pair of numbers into a 2D vector.
     * @param value1 The first number to be converted into a 2D vector.
     * @param value2 (Optional) The second number to be converted into a 2D vector.
     * @returns The number, or pair of numbers, as a 2D vector.
     */
    public toVector2D(value1: number, value2?: number): Vector2D {
        return value2 ? [value1, value2] : [value1, value1]
    }
}

export default new VectorMath2D()