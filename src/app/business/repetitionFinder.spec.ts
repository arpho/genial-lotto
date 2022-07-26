import { RepetitionsFinder } from "./repetionFinder"


describe("repetitionFinder",()=>{
  it("should instantiate",()=>{
   const test = new RepetitionsFinder([12,33,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetitions().length).toBe(5)
  })
  it("should find no repetitions",()=>{
   const test = new RepetitionsFinder([12,33,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetitions()[0]).toBe(0)
   expect(test.findRepetitions()[1]).toBe(0)
   expect(test.findRepetitions()[2]).toBe(0)
   expect(test.findRepetitions()[3]).toBe(0)
   expect(test.findRepetitions()[4]).toBe(0)
  })
  it("should find two repetitions",()=>{
   const test = new RepetitionsFinder([12,21,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetitions()[0]).toBe(1)
   expect(test.findRepetitions()[1]).toBe(1)
   expect(test.findRepetitions()[2]).toBe(0)
   expect(test.findRepetitions()[3]).toBe(0)
   expect(test.findRepetitions()[4]).toBe(0)
  })
  it("should find tfour repetitions",()=>{
   const test = new RepetitionsFinder([12,21,19,20,2])
   expect(test).toBeDefined()
   expect(test.findRepetitions()[0]).toBe(1)
   expect(test.findRepetitions()[1]).toBe(1)
   expect(test.findRepetitions()[2]).toBe(0)
   expect(test.findRepetitions()[3]).toBe(1)
   expect(test.findRepetitions()[4]).toBe(1)
  })
  it("should find  repetitions in the other weel",()=>{
   const test = new RepetitionsFinder([12,33,19,10,2])
   expect(test).toBeDefined()
   expect(test.findRepetitions([3,12,21,54,6])[0]).toBe(1)
   expect(test.findRepetitions([3,12,21,54,6])[1]).toBe(0)
   expect(test.findRepetitions([3,12,21,54,6])[2]).toBe(0)
   expect(test.findRepetitions([3,12,21,54,6])[3]).toBe(0)
   expect(test.findRepetitions([3,12,21,54,6])[4]).toBe(0)
  })

  it("should fetch echoed numbers",()=>{
    const test = new RepetitionsFinder([12,33,19,10,2])
    expect(test.fetchEchoedNumbers([1,1,1,0,0]).length).toBe(3)
    expect(test.fetchEchoedNumbers([0,0,0,0,0]).length).toBe(0)
    expect(test.fetchEchoedNumbers([1,1,1,0,0])[0]).toBe(12)
    expect(test.fetchEchoedNumbers([1,1,1,0,0])[1]).toBe(33)
    expect(test.fetchEchoedNumbers([1,1,1,0,0])[2]).toBe(19)
  })

  it("should complete echoedNumber with their vertible",()=>{
    const test = new RepetitionsFinder([12,33,19,10,2])
    expect(test.reflectArrayAndRemoveDuplicated([17,43,17,34]).length).toBe(4)
    expect(test.reflectArrayAndRemoveDuplicated([17,43,17,34]).includes(17)).toBeTrue()
    expect(test.reflectArrayAndRemoveDuplicated([17,43,17,34]).includes(71)).toBeTrue()
    expect(test.reflectArrayAndRemoveDuplicated([17,43,17,34]).includes(43)).toBeTrue()
    expect(test.reflectArrayAndRemoveDuplicated([17,43,17,34]).includes(34)).toBeTrue()
  })

})