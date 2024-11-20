/**
 * A class used for loading a resource from a source.
 */
export abstract class Loader<T, F> {
    public abstract load(from: F): Promise<T>
}