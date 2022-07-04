import { Extraction } from "../models/extractionModel"
import { IntervalCalculator } from "./intervalCalculator"

const rawData={
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
    "weel": "Cagliari"
  },
  "8153": {
    "date": "07/04/2022",
    "extraction": [
      20,
      31,
      33,
      46,
      12
    ],
    "weel": "Firenze"
  },
  "8154": {
    "date": "07/04/2022",
    "extraction": [
      54,
      79,
      32,
      77,
      40
    ],
    "weel": "Genova"
  },
  "8155": {
    "date": "07/04/2022",
    "extraction": [
      64,
      23,
      61,
      90,
      77
    ],
    "weel": "Milano"
  },
  "8156": {
    "date": "07/04/2022",
    "extraction": [
      84,
      22,
      69,
      54,
      37
    ],
    "weel": "Napoli"
  },
  "8157": {
    "date": "07/04/2022",
    "extraction": [
      58,
      17,
      87,
      76,
      70
    ],
    "weel": "Palermo"
  },
  "8158": {
    "date": "07/04/2022",
    "extraction": [
      4,
      25,
      66,
      27,
      19
    ],
    "weel": "Roma"
  },
  "8159": {
    "date": "07/04/2022",
    "extraction": [
      60,
      13,
      71,
      61,
      35
    ],
    "weel": "Nazionale"
  },
  "8160": {
    "date": "07/04/2022",
    "extraction": [
      90,
      26,
      69,
      65,
      72
    ],
    "weel": "Torino"
  },
  "8161": {
    "date": "07/04/2022",
    "extraction": [
      33,
      43,
      11,
      89,
      79
    ],
    "weel": "Venezia"
  },
  "8162": {
    "date": "09/04/2022",
    "extraction": [
      25,
      34,
      68,
      90,
      66
    ],
    "weel": "Bari"
  },
  "8163": {
    "date": "09/04/2022",
    "extraction": [
      54,
      31,
      35,
      17,
      53
    ],
    "weel": "Cagliari"
  },
  "8164": {
    "date": "09/04/2022",
    "extraction": [
      45,
      44,
      5,
      23,
      34
    ],
    "weel": "Firenze"
  },
  "8165": {
    "date": "09/04/2022",
    "extraction": [
      42,
      13,
      89,
      20,
      8
    ],
    "weel": "Genova"
  },
  "8166": {
    "date": "09/04/2022",
    "extraction": [
      54,
      76,
      60,
      48,
      22
    ],
    "weel": "Milano"
  },
  "8167": {
    "date": "09/04/2022",
    "extraction": [
      85,
      15,
      34,
      66,
      68
    ],
    "weel": "Napoli"
  },
  "8168": {
    "date": "09/04/2022",
    "extraction": [
      82,
      22,
      83,
      12,
      4
    ],
    "weel": "Palermo"
  },
  "8169": {
    "date": "09/04/2022",
    "extraction": [
      41,
      73,
      46,
      15,
      72
    ],
    "weel": "Roma"
  },
  "8170": {
    "date": "09/04/2022",
    "extraction": [
      33,
      56,
      87,
      30,
      84
    ],
    "weel": "Nazionale"
  },
  "8171": {
    "date": "09/04/2022",
    "extraction": [
      25,
      10,
      89,
      71,
      65
    ],
    "weel": "Torino"
  },
  "8172": {
    "date": "09/04/2022",
    "extraction": [
      58,
      80,
      59,
      35,
      1
    ],
    "weel": "Venezia"
  },
  "8173": {
    "date": "12/04/2022",
    "extraction": [
      61,
      44,
      50,
      41,
      30
    ],
    "weel": "Bari"
  },
  "8174": {
    "date": "12/04/2022",
    "extraction": [
      68,
      4,
      47,
      25,
      78
    ],
    "weel": "Cagliari"
  },
  "8175": {
    "date": "12/04/2022",
    "extraction": [
      1,
      35,
      2,
      53,
      69
    ],
    "weel": "Firenze"
  },
  "8176": {
    "date": "12/04/2022",
    "extraction": [
      90,
      73,
      71,
      82,
      81
    ],
    "weel": "Genova"
  },
  "8177": {
    "date": "12/04/2022",
    "extraction": [
      39,
      21,
      72,
      47,
      38
    ],
    "weel": "Milano"
  },
  "8178": {
    "date": "12/04/2022",
    "extraction": [
      58,
      16,
      86,
      25,
      39
    ],
    "weel": "Napoli"
  },
  "8179": {
    "date": "12/04/2022",
    "extraction": [
      5,
      33,
      27,
      53,
      54
    ],
    "weel": "Palermo"
  },
  "8180": {
    "date": "12/04/2022",
    "extraction": [
      18,
      20,
      69,
      25,
      78
    ],
    "weel": "Roma"
  },
  "8181": {
    "date": "12/04/2022",
    "extraction": [
      27,
      17,
      66,
      60,
      34
    ],
    "weel": "Nazionale"
  },
  "8182": {
    "date": "12/04/2022",
    "extraction": [
      25,
      50,
      41,
      69,
      36
    ],
    "weel": "Torino"
  },
  "8183": {
    "date": "12/04/2022",
    "extraction": [
      10,
      43,
      40,
      82,
      88
    ],
    "weel": "Venezia"
  },
  "8184": {
    "date": "14/04/2022",
    "extraction": [
      54,
      72,
      12,
      85,
      58
    ],
    "weel": "Bari"
  },
  "8185": {
    "date": "14/04/2022",
    "extraction": [
      83,
      61,
      41,
      53,
      55
    ],
    "weel": "Cagliari"
  },
  "8186": {
    "date": "14/04/2022",
    "extraction": [
      87,
      48,
      54,
      49,
      64
    ],
    "weel": "Firenze"
  },
  "8187": {
    "date": "14/04/2022",
    "extraction": [
      25,
      42,
      75,
      62,
      43
    ],
    "weel": "Genova"
  },
  "8188": {
    "date": "14/04/2022",
    "extraction": [
      6,
      64,
      8,
      61,
      26
    ],
    "weel": "Milano"
  },
  "8189": {
    "date": "14/04/2022",
    "extraction": [
      71,
      70,
      50,
      54,
      17
    ],
    "weel": "Napoli"
  },
  "8190": {
    "date": "14/04/2022",
    "extraction": [
      12,
      41,
      54,
      72,
      80
    ],
    "weel": "Palermo"
  },
  "8191": {
    "date": "14/04/2022",
    "extraction": [
      89,
      32,
      80,
      8,
      75
    ],
    "weel": "Roma"
  },
  "8192": {
    "date": "14/04/2022",
    "extraction": [
      50,
      54,
      56,
      78,
      30
    ],
    "weel": "Nazionale"
  }
}
const data =[]
for (let key in rawData){
  data.push(new Extraction(rawData[key]))
}
describe("IntervalCalculator should instantiate",()=>{
  it("IntervalCalculator is defined",()=>{
    const test =  new IntervalCalculator(data)
    expect(test).toBeDefined()
  })
  it("retrieve the intervals of 85 for Bari",()=>{
    const test =  new IntervalCalculator(data)
    expect(test.retrieveInterval("Bari",85,"07/04/2022").length).toBe(2)

  })
})