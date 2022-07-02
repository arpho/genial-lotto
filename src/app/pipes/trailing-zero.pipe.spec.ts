import { Figura } from '../business/figura';
import { TrailingZeroPipe } from './trailing-zero.pipe';

describe('TrailingZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new TrailingZeroPipe();
    expect(pipe).toBeTruthy();
  });
  it("trailingZero works",()=>{
    const pipe = new TrailingZeroPipe();
    expect(pipe.transform('1')).toBe("01")
    expect(pipe.transform('10')).toBe("10")
    expect(pipe.transform('9')).toBe("09")
    expect(pipe.transform('2',new Figura())).toBe('2')
  })
});
