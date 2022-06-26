import { Address } from "../models/Address"
import { DateModel } from "../modules/user/models/birthDateModel"
import { UserModel } from "../modules/user/models/userModel"
import { UserType } from "./usersType"
import { Telephone } from "./telephone"
import { Value } from "../modules/item/models/value"
import { RoleModel } from "../modules/user/models/privilegesLevelModel"
import { Serializers } from "../modules/helpers/serializers"

export class Customer extends UserModel {
    address: Address
    userType: UserType
    telephones: Array<Telephone> = []
    dor = new DateModel(new Date()) // date of registration
    role = new RoleModel({ key: "Utente standard", value: 3 })

 
    load(v: {}) {
        this.telephones = []
        Object.assign(this, v)
        this.level = this.level||3
        this.level = Number(this.level) // casting to number
        this.role = super.roleFactory(this.level)
        if(v&&v['dor']){
        this.dor = new DateModel(new Date(this.dor))}
        if (v && v['telephones']) {
            this.telephones = v['telephones'].map((t) => {
                return new Telephone(t)
            })
        }
        if (v && v['indirizzo']) {
            this.address = new Address(v['indirizzo'])
        }

		else{
			this.address = new Address()
		}
        if(!this.dor ){ // I assume user from db has a valid dor, if not is a a faulty user
            this.dor = new DateModel(new Date("01-01-1972")) // set a very old Date this user has never been registered 
        }

        return this
    }

    serialize() {
      const  serializers = new Serializers()

        const telephones = this.telephones.map((t: Telephone) => t.serialize())

        var out = {
            ...super.serialize(),
            ...{
				level:serializers.serialize2PositiveNumber( this.level,3),
                telephones: telephones,
                archived: !!this.archived,
                dor: new DateModel(this.dor).formatDate(),
                userType: this.userType
            }
        }
        if (this.key) {
            out = { ...out, ...{ key: serializers.serialize2String( this.key) } }
        }
        if (this.address instanceof Address) {
            out = { ...out, ...{address: this.address.serialize() }, }
        }

        return out

    }

    getValue2(): Value {
      return new Value({
        value:this.email,
        label:"email"
      })
    }


    getValue4(): Value {
        return new Value({ label: 'key', value: this.key })
    }

    getValue3(): Value {
        return new Value({ value: this.enabled?"abilitato":"non abilitato", label: 'utente ' })
    }

   /*  getUserTypeKey(level) {

        var out = configs.userType.filter(
            (access: UserTypeModel) => access.value === level
        )[0]

        return out ? out.key : ''

    } */

    setKey(key: string) {
        this.key = key
        return this
    }

    getTitle(): Value {
        return new Value({ value: `${this.firstName} ${this.lastName}`, label: 'utente' })
    }

    getElement(): { element: string; genere: "o" } {
        return { element: 'utente', genere: 'o' }
    }

    constructor(user?: {}, key?: string) {
        super(user, key)
        this.load(user)
        if (!this.userType) {
            this.userType = UserType.regular
        }

    }
}