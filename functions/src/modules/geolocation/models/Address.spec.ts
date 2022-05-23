import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Address } from './Address'
describe('should instantiate correctly', () => {
    const data = { 'street': 'via E. cosenz', 'cap': '20158', city: 'milano', province: 'mi', number: '54', latitude: 3, longitude: 4 }
    const address = new Address(data)
    it('testing data', () => {
        expect(address.street).toEqual(data.street)
        expect(address.cap).toEqual(data.cap)
        expect(address.city).toEqual(data.city)
        expect(address.number).toEqual(data.number)
        expect(address.longitude).toEqual(data.longitude)
        expect(address.latitude).toEqual(data.latitude)

    })
    it('testing serialize', () => {

        expect(address.serialize().cap).toEqual(data.cap)
        expect(address.serialize().city).toEqual(data.city)
        expect(address.serialize().number).toEqual(data.number)
        expect(address.serialize().latitude).toEqual(data.latitude)
        expect(address.serialize().longitude).toEqual(data.longitude)
        expect(address.serialize().street).toEqual(data.street)
    })
})