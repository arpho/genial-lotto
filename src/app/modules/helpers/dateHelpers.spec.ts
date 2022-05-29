import { DateHelpers } from "./dateHelper"

describe("conversion format should work",()=>{
  const test  = new DateHelpers()
  it("from Italian to american",()=>{
    expect(test.fromItalian2AmericanFormat("16/03/1977")).toBe("03/16/1977")
  })
})