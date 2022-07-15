import { Extraction } from "../models/extractionModel"
import { DateHelpers } from "../modules/helpers/dateHelper"
import { data1, data2, data3, manyIntervals } from "./dataInterval"
import { IntervalCalculator } from "./intervalCalculator"


const sorterDateDescending = DateHelpers.sorterDescendingDate


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
    expect(test.retrieveInterval("Bari",85).length).toBe(1)
    expect(test.retrieveInterval("Bari",85)[0].date).toBe("07/04/2022")

  })

  it("retrieve the intervals of 85 for bari with 2 intervals",()=>{const rawData= data2
  
  const data =[]
  for (let key in rawData){
    data.push(new Extraction(rawData[key]).setKey(key))
  }
  const sorterDateDescending = (a:Extraction,b:Extraction)=>a.dateInmmsec-b.dateInmmsec

    const test =  new IntervalCalculator(data.sort(sorterDateDescending))
    expect(test).toBeDefined()
    const intervals =test.retrieveInterval("Bari",85)
    expect(intervals.length).toBe(3)
    expect(intervals[0].date).toBe("07/04/2022")
    expect(intervals[1].date).toBe("17/04/2022")
    expect(intervals[0].interval).toBe(1)
    expect(intervals[2].date).toBe("20/04/2022")
    expect(intervals[1].interval).toBe(1)
    expect(intervals[2].interval).toBe(2)

  })

  it("retrieve more intervals",()=>{
    const rawData = manyIntervals
    const data =[]
  for (let key in rawData){
    data.push(new Extraction(rawData[key]).setKey(key))
  }

  const test = new IntervalCalculator(data.sort(sorterDateDescending))
  const intervals = test.retrieveInterval("Bari",7)
  expect(intervals.length).toBe(5)
  expect(intervals[0].interval).toBe(1)
  expect(intervals[1].interval).toBe(1)
  expect(intervals[2].interval).toBe(5)
  expect(intervals[3].interval).toBe(3)
  expect(intervals[4].interval).toBe(1)
  expect(intervals[0].date).toBe("21/04/2022")
  expect(intervals[1].date).toBe("22/04/2022")
  expect(intervals[2].date).toBe("5/05/2022")
  expect(intervals[3].date).toBe("5/06/2022")
  })

  it("2 intervals for 47 on Bari",()=>{
    const rawData = data3
    const data =  rawData.map(e=>new Extraction(e))
    const test = new IntervalCalculator(data)
    const intervals = test.retrieveInterval("Bari",47)
    expect(intervals.length).toBe(2)
    expect(intervals[0].interval).toBe(1)
    expect(intervals[0].date).toBe("30/04/2022")
    expect(intervals[1].interval).toBe(6)
    expect(intervals[1].date).toBe("14/05/2022")
    
    }
  )
})