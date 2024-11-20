import { GameError } from "@core/components/GameError.component"

export class AssetNotFound extends GameError {
    public errorCode = 'ASSET_NOT_FOUND'
    public message = 'Could not find asset.'
}