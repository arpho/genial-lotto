import { Piu2meno90 } from "./piu2meno90"
import { Trasformazioni } from "./trasformazioni"

describe("trasformazioni funzionana",()=>{
  it("+2-90",()=>{
    const transf = new Piu2meno90()
    expect(transf.transform(8)).toBe(80)
    expect(transf.transform(10)).toBe(78)
  })
})