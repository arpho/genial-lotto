import { Extraction } from "../models/extractionModel"
import { IntervalCalculator } from "./intervalCalculator"


describe("IntervalCalculator should instantiate",()=>{
  it("IntervalCalculator is defined",()=>{const rawData={
    "8151": {
      "date": "07/04/2022",
      "extraction": [
        85,
        29,
        78,
        75,
        87
      ],
      "weel": "Bari"
    },
    "8152": {
      "date": "07/04/2022",
      "extraction": [
        58,
        81,
        80,
        78,
        16
      ],
      "weel": "Bari"
    },
    "8155": {
      "date": "17/04/2022",
      "extraction": [
        64,
        23,
        61,
        90,
        77
      ],
      "weel": "Bari"
    },
    }
  
  const data =[]
  for (let key in rawData){
    console.log("*# raw data",key,new Extraction(rawData[key]).setKey(key))
    data.push(new Extraction(rawData[key]).setKey(key))
  }
    const test =  new IntervalCalculator(data)
  })
  it("retrieve the intervals of 85 for bari not interval",()=>{const rawData={
    "8151": {
      "date": "07/04/2022",
      "extraction": [
        85,
        29,
        78,
        75,
        87
      ],
      "weel": "Bari"
    },
    "8152": {
      "date": "07/04/2022",
      "extraction": [
        58,
        81,
        80,
        78,
        16
      ],
      "weel": "Bari"
    },
    "8155": {
      "date": "17/04/2022",
      "extraction": [
        64,
        23,
        61,
        90,
        77
      ],
      "weel": "Bari"
    },
    }
  
  const data =[]
  for (let key in rawData){
    console.log("*# raw data",key,new Extraction(rawData[key]).setKey(key))
    data.push(new Extraction(rawData[key]).setKey(key))
  }
    const test =  new IntervalCalculator(data)
    expect(test).toBeDefined()
    expect(test.retrieveInterval("Bari",85,"07/04/2022").length).toBe(0)

  })

  it("retrieve the intervals of 85 for bari with 2 intervals",()=>{const rawData={
    "8151": {
      "date": "07/04/2022",
      "extraction": [
        85,
        29,
        78,
        75,
        87
      ],
      "weel": "Bari"
    },
    "8152": {
      "date": "17/04/2022",
      "extraction": [
        58,
        81,
        85,
        78,
        16
      ],
      "weel": "Bari"
    },
    "8155": {
      "date": "18/04/2022",
      "extraction": [
        64,
        23,
        61,
        75,
        77
      ],
      "weel": "Bari"
    },
    "8156":{
      "date":"20/04/2022",
      "extraction":[
        25,
        35,
        85,
        65,
        13
      ],
      "weel":"Bari"
    }
    }
  
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