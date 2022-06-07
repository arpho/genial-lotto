import { Figura } from "./figura"

describe("testing figura",()=>{
    it("transform correctly numbers",()=>{
        const figura= new Figura()
        expect(figura.transform(1)).toBe(1)
        expect(figura.transform(15)).toBe(6)
        expect(figura.transform(13)).toBe(4)
        expect(figura.transform(39)).toBe(3)
        expect(figura.transform(99)).toBe(9)
        expect(figura.transform(59)).toBe(5)
        expect(figura.transform(18)).toBe(9)
        expect(figura.transform(21)).toBe(3)
        expect(figura.transform(31)).toBe(4)
        expect(figura.transform(91)).toBe(1)
    })
})