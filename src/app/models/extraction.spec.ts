import { Extraction } from "./extractionModel"

describe("extaction sould load data",()=>{
it("load full data",()=>{
  const data = {
    date:"06/12/1941",
    well:"Bari",
    extraction:["24","39","53","23","49"]
  }
  const test = new Extraction(data)
  expect(test.weel).toEqual(data.well)
})
})