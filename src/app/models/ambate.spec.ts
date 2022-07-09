import { Ambate } from "./ambate"

describe("should instantiate",()=>{
it("should be instantated correctly",()=>{
  const test = new Ambate({weel1:"Roma",
weel2:"Bari",
ambata11:15,
ambata21:16

})
expect(test).toBeDefined()
expect(test.weel1).toBe("Roma")
expect(test.weel2).toBe("Bari")
expect(test.ambata11).toBe(15)
expect(test.ambata12).toBe(51)
expect(test.ambata21).toBe(16)
expect(test.ambata22).toBe(61)
})

})