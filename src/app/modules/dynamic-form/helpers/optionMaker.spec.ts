import { OptionsMaker } from "./optionMaker"

describe("option value well formed",()=>{
  const test = new OptionsMaker()
  it("Array of string",()=>{
    expect(test.makesOptionsFromArray(["uno","due"]).length).toBe(2)
    expect(test.makesOptionsFromArray(["uno","due"])[0].key).toBe("uno")
    expect(test.makesOptionsFromArray(["uno","due"])[0].value).toBe(0)
    expect(test.makesOptionsFromArray(["uno","due"])[1].key).toBe("due")
    expect(test.makesOptionsFromArray(["uno","due"])[1].value).toBe(1)
    expect
  })
})