import { Extraction } from "../models/extractionModel"
import { DateHelpers } from "./dateHelpers"

describe("DateHelpers works",()=>{
  it("should instantiate",()=>{
expect(new DateHelpers()).toBeDefined()
  })
  it("should sort correctly",()=>{
    const data =[
      new Extraction({date:"10/07/2022",weel:"vecchia"}),
    new Extraction({date:"15/07/2022",weel:"last"})
    ]
    expect(data.sort(DateHelpers.sorterDescendingDate)[0].weel).toBe("last")
    data.push(new Extraction({date:"15/05/2022",weel:"pushed"}))
    expect(data.sort(DateHelpers.sorterAscendingDate)[0].weel).toBe("pushed")
  })
})