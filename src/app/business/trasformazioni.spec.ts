import { Trasformazioni } from "./trasformazioni"

describe("trasformazioni funzionana",()=>{
  it("+2-90",()=>{
    const transf = new Trasformazioni()
    expect(transf.piu2meno90(8)).toBe(80)
    expect(transf.piu2meno90(10)).toBe(78)
  })
})