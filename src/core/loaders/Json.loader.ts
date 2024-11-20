import { Loader } from "@core/components/Loader.component"
import { AssetNotFound } from "@core/errors/asset/AssetNotFound"

export class JsonLoader extends Loader<Object, string> {
    public async load<T>(from: string) {
        try {
            const result = await fetch(from)

            if (!result) throw new AssetNotFound('JsonLoader')

            const json = await result.json()

            return json as T
        }
        catch (err) {
            throw err
        }
    }
}

export default new JsonLoader()