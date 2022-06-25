
import { DropdownQuestion } from "../modules/dynamic-form/models/question-dropdown"
import { Address } from "./Address"
import { Serializers } from "../modules/helpers/serializers"
import { DateModel } from "../modules/user/models/birthDateModel"
import { UserModel } from "../modules/user/models/userModel"
import { UserType } from "./usersType"

export class Telephone {
    numero: string
    note: string
    role: number

    serialize() {
        const serializers = new Serializers()
        return { numero: serializers.serialize2String(this.numero), note: serializers.serialize2String(this.note) }
    }

    load(v: {}) {
        Object.assign(this, v)
        return this
    }

    constructor(v: {}) {
        this.load(v)
    }
}

