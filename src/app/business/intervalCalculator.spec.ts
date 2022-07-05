import { Extraction } from "../models/extractionModel"
import { data1, data2, manyIntervals } from "./dataInterval"
import { IntervalCalculator } from "./intervalCalculator"


describe("IntervalCalculator should instantiate",()=>{
  it("IntervalCalculator is defined",()=>{const rawData= data1
  
  const data =[]
  for (let key in rawData){
    data.push(new Extraction(rawData[key]).setKey(key))
  }
    const test =  new IntervalCalculator(data)
  })
  it("retrieve the intervals of 85 for bari not interval",()=>{const rawData= data1
  
  const data =[]
  for (let key in rawData){
    data.push(new Extraction(rawData[key]).setKey(key))
  }
    const test =  new IntervalCalculator(data)
    expect(test).toBeDefined()
    expect(test.retrieveInterval("Bari",85,"07/04/2022").length).toBe(0)

  })

  it("retrieve the intervals of 85 for bari with 2 intervals",()=>{const rawData= data2
  
  const data =[]
  for (let key in rawData){
    data.push(new Extraction(rawData[key]).setKey(key))
  }
    const test =  new IntervalCalculator(data)
    expect(test).toBeDefined()
    const intervals =test.retrieveInterval("Bari",85,"07/04/2022")
    expect(intervals.length).toBe(2)
    expect(intervals[0].date).toBe("17/04/2022")
    expect(intervals[1].date).toBe("20/04/2022")
    expect(intervals[0].interval).toBe(1)
    expect(intervals[1].interval).toBe(2)

  })

  it("rertrieve more intervals",()=>{
    const rawData = manyIntervals
    const data =[]
  for (let key in rawData){
    data.push(new Extraction(rawData[key]).setKey(key))
  }
  const test = new IntervalCalculator(data)
  const intervals = test.retrieveInterval("Bari",7,"05/06/2022")
  expect(intervals.length).toBe(4)
  expect(intervals[0].interval).toBe(2)
  expect(intervals[1].interval).toBe(3)
  expect(intervals[2].interval).toBe(5)
  expect(intervals[3].interval).toBe(1)
  expect(intervals[0].date).toBe("10/06/2022")
  expect(intervals[1].date).toBe("5/05/2022")
  expect(intervals[2].date).toBe("22/04/2022")
  expect(intervals[3].date).toBe("21/04/2022")
  })
})