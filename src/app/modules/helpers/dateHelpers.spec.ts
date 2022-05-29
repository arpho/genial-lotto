import { DateHelpers } from "./dateHelper"

describe("conversion format should work",()=>{
  const test  = new DateHelpers()
  it("from Italian to american",()=>{
    expect(test.fromItalian2AmericanFormat("16/03/1977")).toBe("03/16/1977")
  })
  it("convert from datePicker",()=>{
    const test = new DateHelpers()
    expect(test.fromDatePickerFormat2ItalianFormat("2022-05-24")).toBe("24/05/2022")
  })
})