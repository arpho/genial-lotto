import { stringify } from "querystring"
import { isConstructorDeclaration } from "typescript"
import { Serializers } from "../../helpers/serializers"

export class TrackPosition{

    latitude:number
    longitude:number
    driverKey="" 
    timestamp:number
    constructor(v?:{}){
        this.load(v)

    }

    serialize(){
    const serializers= new Serializers
    return {
        latitude:serializers.serialize2PositiveNumber( this.latitude),
        longitude:serializers.serialize2PositiveNumber( this.longitude),
        timestamp:serializers.serialize2PositiveNumber( this.timestamp),
        key:serializers.serialize2String(this.driverKey)
    }
    }
    load(v: {}) {
       if(v){
           Object.assign(v)
       }
    }
}