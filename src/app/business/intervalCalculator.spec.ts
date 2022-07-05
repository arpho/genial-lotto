import { Extraction } from "../models/extractionModel"
import { data1, data2 } from "./dataInterval"
import { IntervalCalculator } from "./intervalCalculator"


describe("IntervalCalculator should instantiate",()=>{
  it("IntervalCalculator is defined",()=>{const rawData= data1
  
  const data =[]
  for (let key in rawData){
    console.log("*# raw data",key,new Extraction(rawData[key]).setKey(key))
    data.push(new Extraction(rawData[key]).setKey(key))
  }
    const test =  new IntervalCalculator(data)
  })
  it("retrieve the intervals of 85 for bari not interval",()=>{const rawData= data1
  
  const data =[]
  for (let key in rawData){
    console.log("*# raw data",key,new Extraction(rawData[key]).setKey(key))
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
})