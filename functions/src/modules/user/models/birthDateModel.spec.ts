// tslint:disable: semicolon
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateModel } from './birthDateModel';
describe('model should create from object', () => {
    const datedata = { day: 16, month: 3, year: 1977 }
    const modelDate = new DateModel(datedata)
    it('data are ok', () => {
        expect(modelDate.day).toBe(16)
        expect(modelDate.month).toBe(3)
        expect(modelDate.year).toBe(1977)
        expect(modelDate.fullDate).toBeTruthy() // non so perchè fosse toBEFalsy()
    })
    it('checking formatDate', () => {
        expect(modelDate.formatDate()).toBe('1977-04-16')
    })

})
describe('creating model from Date Object', () => {
    const modelDate = new DateModel(new Date())
    it('data are ok', () => {
        expect(modelDate.day).toBe(new Date().getDate())
        expect(modelDate.month).toBe(new Date().getMonth())
        expect(modelDate.year).toBe(new Date().getFullYear())
        expect(modelDate.fullDate).toBeTruthy()
    })
})

describe('updating date', () => {
    const testModel = new DateModel(new Date())
    testModel.updateDate(new Date('1977-03-16'))
    it('check data fields after updating', () => {
        expect(testModel.fullDate.getFullYear()).toBe(1977)
        expect(testModel.fullDate.getMonth()).toBe(2)
        expect(testModel.fullDate.getDate()).toBe(16)

    })
})

