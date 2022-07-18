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
  it("fetchX should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="72.33.36"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetch_X()).toBe(15)
  })
  it("fetchY should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="72.33.58"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetch_Y()).toBe(1)
  })
  it("fetch_first should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="72.33.58"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetch_first()).toBe(16)
  })
  it("fetch_second should work",()=>{
    const figure1=[1,2,3,4,5]
    const figure2=[6,7,8,9,0]
    const mask ="72.33.58"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetch_second()).toBe(74)
  })

  it("one more test",()=>{
    const figure1=[3, 7,8,7,7]
    const figure2=[7,8,2,4,2]
    const mask ="17.17.17"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetchA()).toBe(38)
    expect(test.fetchB()).toBe(38)
    expect(test.fetchC()).toBe(38)
    expect(test.fetch_X()).toBe(76)
    expect(test.fetch_first()).toBe(62)
    expect(test.fetch_second()).toBe(28)

  })

  it("two more test",()=>{
    const figure1=[9,6,3,4,3]
    const figure2=[5,3,2,6,6]
    const mask ="17.17.17"
    const test = new MagicCombination(figure1,figure2,mask)
    expect(test.fetchA()).toBe(3)
    expect(test.fetchB()).toBe(3)
    expect(test.fetchC()).toBe(3)
    expect(test.fetch_X()).toBe(6)
    expect(test.fetch_Y()).toBe(6)

})
})