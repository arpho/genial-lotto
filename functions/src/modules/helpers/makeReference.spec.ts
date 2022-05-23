import { ReferenceFactory } from "./makeReference"

describe('url well formed',()=>{
    const makeReference = new ReferenceFactory()
    expect(makeReference.referenceFactory('user','test')).toEqual('user/test')
})