import { ReferenceFactory } from "./makeReference"

describe('url well formed',()=>{
    const makeReference = new ReferenceFactory()
    it("url is ok",()=>{

    expect(makeReference.referenceFactory('user','test')).toEqual('user/test')
    })
})