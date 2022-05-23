import { Serializers } from "../../helpers/serializers"
import { Genere, ItemModelInterface } from "../../item/models/itemModelInterface"
import { ItemServiceInterface } from "../../item/models/ItemServiceInterface"
import { QuickAction } from "../../item/models/QuickAction"
import { Value } from "../../item/models/value"

export class Address implements ItemModelInterface {
    street: string
    cap: string
    city: string
    province: string
    latitude: number
    longitude: number
    number: string

    load(value: {}) {
        Object.assign(this, value)
        return this
    }
    serializers: Serializers


    fetchAddress() {
        return `${this.street}, ${this.number}, ${this.cap} ${this.city} ${this.province}`
    }

    serialize() {
        return {
            'street': this.serializers.serialize2String(this.street),
            'cap': this.serializers.serialize2String(this.cap),
            'city': this.serializers.serialize2String(this.city),
            'number': this.serializers.serialize2String(this.number),
            'province': this.serializers.serialize2String(this.province),
            'longitude': this.serializers.serialize2PositiveNumber(this.longitude),
            'latitude': this.serializers.serialize2PositiveNumber(this.latitude)

        }
    }

    constructor(value?: {}) {
        this.serializers = new Serializers()
        this.load(value)
    }
    title: string
    note?: string
    key: string
    quickActions?: QuickAction[]
    archived?: boolean
    service?: ItemServiceInterface
    getTitle(): Value {
        throw new Error("Method not implemented.")
    }
    getCountingText(): { singular: string; plural: string } {
        throw new Error("Method not implemented.")
    }
    getNote(): Value {
        throw new Error("Method not implemented.")
    }
    build?(item: {}) {
        throw new Error("Method not implemented.")
    }
    isArchived?(): boolean {
        throw new Error("Method not implemented.")
    }
    archiveItem?(b: boolean) {
        throw new Error("Method not implemented.")
    }
    isArchivable?(): boolean {
        throw new Error("Method not implemented.")
    }
    getValue2(): Value {
        throw new Error("Method not implemented.")
    }
    getValue3(): Value {
        throw new Error("Method not implemented.")
    }
    getValue4(): Value {
        throw new Error("Method not implemented.")
    }
    setKey?(key: string): ItemModelInterface {
        throw new Error("Method not implemented.")
    }
    getEditPopup(item?: ItemModelInterface, service?: ItemServiceInterface) {
        throw new Error("Method not implemented.")
    }
    initialize(item: {}): ItemModelInterface {
        throw new Error("Method not implemented.")
    }
    getAggregate(): Value {
        throw new Error("Method not implemented.")
    }
    aggregateAction?() {
        throw new Error("Method not implemented.")
    }
    hasQuickActions?(): boolean {
        throw new Error("Method not implemented.")
    }
    getElement(): { element: string; genere: Genere } {
        throw new Error("Method not implemented.")
    }
}

