import { FiguralMap } from "./figuralMap"

describe("tfiguralMapValidators work",()=>{
  it("should instantiated",()=>{
    const test  = new FiguralMap()
    expect(test).toBeDefined()
  })
  it("should split numbers",()=>{
    expect(FiguralMap.splitNumbers(11).length).toBe(2)
    expect(FiguralMap.splitNumbers(11)[0]).toBe(1)
    expect(FiguralMap.splitNumbers(11)[1]).toBe(1)
    expect(FiguralMap.splitNumbers(71)[0]).toBe(1)
    expect(FiguralMap.splitNumbers(71)[1]).toBe(7)
  })
})
it("isValid works",()=>{
  expect(FiguralMap.isValid("11.25.36")).toBe(true)
  expect(FiguralMap.isValid("11.25")).toBe(false)
})
it("should fetch the map",()=>{
  expect(FiguralMap.fetchMap("12.32.56").length).toBe(6)
  expect(FiguralMap.fetchMap("12.34.56")[0]).toBe(1)
  expect(FiguralMap.fetchMap("12.34.56")[1]).toBe(2)
  expect(FiguralMap.fetchMap("12.34.56")[2]).toBe(3)
  expect(FiguralMap.fetchMap("12.34.56")[3]).toBe(4)
  expect(FiguralMap.fetchMap("12.34.56")[4]).toBe(5)
  expect(FiguralMap.fetchMap("12.34.56")[5]).toBe(6)
})