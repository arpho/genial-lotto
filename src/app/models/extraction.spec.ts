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
  expect(test.extraction.length).toBe(5)
  expect(test.extraction[0]).toBe("24")
  expect(test.dateInmsec).toBe(new Date(data.date).getTime())
  expect(test.serialize().weel).toBe(data.well)
  expect(test.serialize().dateInmsec).toBe(new Date(data.date).getTime())
  expect(test.serialize().extraction[0]).toBe("24")})
})