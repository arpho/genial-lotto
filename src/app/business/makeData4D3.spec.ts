import { Interval } from "../models/interval"
import { makeData4D3 } from "./makeData4D3"

describe("makeData4D3",()=>{
it("should instantiate",()=>{
expect(new makeData4D3()).toBeDefined()
})
it("should work with one only element",()=>{
  const test = new makeData4D3()
  expect(test.transform([new Interval(1,"16/03/1977")]).length).toBe(1)
  expect(test.transform([new Interval(1,"16/03/1977")])[0].date).toBe("16/03/1977")
  expect(test.transform([new Interval(1,"16/03/1977")])[0].id).toBe(0)
  expect(test.transform([new Interval(1,"16/03/1977")])[0].interval).toBe(1)
})
it("should work with two elements",()=>{
  const test = new makeData4D3()
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")]).length).toBe(2)
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")])[0].date).toBe("16/03/1977")
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")])[0].id).toBe(0)
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")])[0].interval).toBe(1)
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")])[1].date).toBe("18/03/1977")
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")])[1].id).toBe(1)
  expect(test.transform([new Interval(1,"16/03/1977"),new Interval(5,"18/03/1977")])[1].interval).toBe(5)
})
})