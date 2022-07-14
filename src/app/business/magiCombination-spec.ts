import { MagicCombination } from "./magicCombination"

describe("MagicCombination works",()=>{
  it("should instantiate",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask =[1,1,2,2,3,6]
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test).toBeDefined()
  })

  it("should getFigure",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask =[1,1,2,2,3,6]
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.getFigure(0)).toBe(0)
    expect(test.getFigure(1)).toBe(1)
    expect(test.getFigure(2)).toBe(2)
    expect(test.getFigure(3)).toBe(3)
    expect(test.getFigure(4)).toBe(4)
    expect(test.getFigure(5)).toBe(5)
    expect(test.getFigure(6)).toBe(6)
    expect(test.getFigure(7)).toBe(7)
    expect(test.getFigure(8)).toBe(8)
    expect(test.getFigure(9)).toBe(9)
  })
  it("combineFigure works",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask =[1,1,2,2,3,6]
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.combineFigures(1,6)).toBe(16)
    expect(test.combineFigures(9,4)).toBe(94)

  })
})