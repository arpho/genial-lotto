import { Extraction } from "./extractionModel"

describe("extaction sould load data",()=>{
it("load full data",()=>{
  const data = {
    date:"06/12/1941",
    weel:"Bari",
    extraction:["24","39","53","23","49"]
  }
  const test = new Extraction(data)
  expect(test.weel).toEqual(data.weel)
  expect(test.extraction.length).toBe(5)
  expect(test.extraction[0]).toBe(24)
  expect(test._dateInmsec).toBe(new Date("12/06/1941").getTime())
  expect(test.serialize().weel).toBe(data.weel)
  expect(test.serialize().dateInmsec).toBe(new Date("12/06/1941").getTime())
  expect(test.serialize().extraction[0]).toBe(24)})
})
it("should work with partial data",()=>{

  const data ={
    dateInmmsec:new Date("03/16/1977").getTime(),
   weel:"Bari",
   id:"qwert"

  }
  const test = new Extraction(data)
  expect(test.date).toEqual("16/03/1977")
  expect(test.serialize().extraction.length).toBe(0)
  expect(test.serialize().dateInmsec).toBe(data.dateInmmsec)
})
it("should work with date after september",()=>{

  const data ={
    dateInmmsec:new Date("10/16/1977").getTime(),
   weel:"Bari",
   id:"qwert"

  }
  const test = new Extraction(data)
  expect(test.date).toEqual("16/10/1977")
  expect(test.id).toBe(data.id)
  expect(test.serialize().extraction.length).toBe(0)
  expect(test.serialize().dateInmsec).toBe(data.dateInmmsec)
})

it("date should be converted",()=>{
  const data= {
    date:"26/02/2022",
    "weel":"Roma"

  }
  const test = new Extraction(data)
  expect(test.dateInmmsec).toBe(new Date("02/26/2022").getTime())
  expect(test.date).toBe("02/26/2022")
})
it("should create with no parameter",()=>{

  const test = new Extraction()
  expect(test).toBeDefined()
})