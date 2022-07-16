import { MagicCombination } from "./magicCombination"

describe("MagicCombination works",()=>{
  it("should instantiate",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="11.23.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test).toBeDefined()
    expect(test.getFiguralMap().length).toBe(6)
    expect(test.getFiguralMap()[0]).toBe(1)
    expect(test.getFiguralMap()[1]).toBe(1)
    expect(test.getFiguralMap()[2]).toBe(2)
    expect(test.getFiguralMap()[3]).toBe(3)
    expect(test.getFiguralMap()[4]).toBe(3)
    expect(test.getFiguralMap()[5]).toBe(6)
  })

  it("should getFigure",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="11.22.36"
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
    const mask ="11.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.combineFigures(1,6)).toBe(16)
    expect(test.combineFigures(9,4)).toBe(94)

  })
  it("fetchA should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="16.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetchA()).toBe(16)
    
  })
  it("fetchB should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="16.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetchB()).toBe(22)
  })
  it("fetchB should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="16.83.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetchB()).toBe(83)
  })
  it("fetchC should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="16.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetchC()).toBe(36)
  })
  it("fetchd should work with case standard",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="16.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_d()).toBe(38)
  })
  it("fetchd should work with case >90",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="72.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_d()).toBe(4)
  })
  it("fetchd should work with case =90",()=>{
    const figure1=[1,0,3,4,5]
    const figure2=[2,7,8,9,0]
    const mask ="72.62.36"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_d()).toBe(1)
  })
  it("fetch_e should work with case standard",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="16.22.36"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_e()).toBe(58)
  })
  it("fetch_e should work with case >90",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="72.83.36"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_e()).toBe(29)
  })
  it("fetchd should work with case =90",()=>{
    const figure1=[1,0,3,4,5]
    const figure2=[2,7,8,9,0]
    const mask ="72.12.80"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_e()).toBe(1)
  })
  it("fetch_primo should work ",()=>{
    const figure1=[7,5,8,1,4]
    const figure2=[2,6,6,3,3]
    const mask ="16.90.23"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_first()).toBe(16)
  })
  it("fetch_secondo",()=>{
    const figure1=[7,5,8,1,4]
    const figure2=[2,6,6,3,3]
    const mask ="16.90.23"
    const test = new MagicCombination(figure1,figure2,mask)
  expect(test.fetch_second()).toBe(74)
  })
})