import { FetchExtractionNumbers } from "./fetchExtractionNumbers"

describe("we fetch extraction numbers",()=>{
  it("fetch from data with single space",()=>{
    const data= " 12 3 4 5 6"
    expect(FetchExtractionNumbers.fetchNumbersFromInputString(data).length).toBe(5)
    expect(FetchExtractionNumbers.fetchNumbersFromInputString(data)[0]).toBe(12)
    expect(FetchExtractionNumbers.fetchNumbersFromInputString(data)[1]).toBe(3)
    expect(FetchExtractionNumbers.fetchNumbersFromInputString(data)[2]).toBe(4)
    expect(FetchExtractionNumbers.fetchNumbersFromInputString(data)[3]).toBe(5)
    expect(FetchExtractionNumbers.fetchNumbersFromInputString(data)[4]).toBe(6)
  })
})