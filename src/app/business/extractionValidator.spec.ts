import { ExtractionValidator } from "./extractionValidator"

describe("should validate array of 5 numbers",()=>{
  it("it's a valid extraction",()=>{
  const validator = new ExtractionValidator()
  expect(validator.isValid([1,5,13,85,4])).toBe(true)
  expect(validator.isValid([1,5,13,85])).toBe(false)
  expect(validator.isValid([1,5,13,85,15,5])).toBe(false)
  })
  it("number >90 are not accepted",()=>{
    const validator = new ExtractionValidator()
  expect(validator.isValid([1,5,13,85,95])).toBe(false)
  })
  it("not integer number  are not accepted",()=>{
    const validator = new ExtractionValidator()
  expect(validator.isValid([1,5,13,85,10.5])).toBe(false)
  })
  it("number <0 are not accepted",()=>{
    const validator = new ExtractionValidator()
  expect(validator.isValid([1,5,13,85,-5])).toBe(false)
  })
})