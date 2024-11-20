export interface NodeInit<T extends Object = {}> {
    state: T
    children: NodeInit[]
}