import { SameLengthStringPipe } from './same-length-string.pipe';

describe('SameLengthStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SameLengthStringPipe();
    expect(pipe).toBeTruthy();
  });
  it("pipe works correctly",()=>{
    const pipe = new SameLengthStringPipe();
    expect(pipe.transform("ciao",9)).toBe("ciao______")
    expect(pipe.transform("ci",9)).toBe("ci________")

  })
});
