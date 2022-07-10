import { RepetitionsFinder } from "./repetionFinder"


describe("repetitionFinder",()=>{
  it("should instantiate",()=>{
   const test = new RepetitionsFinder([12,33,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetiotions().length).toBe(5)
  })
  it("should find no repetitions",()=>{
   const test = new RepetitionsFinder([12,33,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetiotions()[0]).toBe(0)
   expect(test.findRepetiotions()[1]).toBe(0)
   expect(test.findRepetiotions()[2]).toBe(0)
   expect(test.findRepetiotions()[3]).toBe(0)
   expect(test.findRepetiotions()[4]).toBe(0)
  })
  it("should find two repetitions",()=>{
   const test = new RepetitionsFinder([12,21,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetiotions()[0]).toBe(1)
   expect(test.findRepetiotions()[1]).toBe(1)
   expect(test.findRepetiotions()[2]).toBe(0)
   expect(test.findRepetiotions()[3]).toBe(0)
   expect(test.findRepetiotions()[4]).toBe(0)
  })
  it("should find tfour repetitions",()=>{
   const test = new RepetitionsFinder([12,21,19,20,2])
   expect(test).toBeDefined()
   expect(test.findRepetiotions()[0]).toBe(1)
   expect(test.findRepetiotions()[1]).toBe(1)
   expect(test.findRepetiotions()[2]).toBe(0)
   expect(test.findRepetiotions()[3]).toBe(1)
   expect(test.findRepetiotions()[4]).toBe(1)
  })

})