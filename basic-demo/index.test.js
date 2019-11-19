describe('Expect API', () => {
  it('Equality', () => {
    expect(0).toBe(0);
    expect(1).toEqual(1);
  });

  it('Comparisons', () => {
    expect(2).toBeGreaterThan(1);
    expect(1).toBeLessThan(2);
  });

  it('Types', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(NaN).toBeNaN();
  });

  it('Others', () => {
    expect(1.0001).toBeCloseTo(1, 3);
    expect('foobar').toMatch(/foo/);
    expect([1, 2, 3]).toContain(1);
    expect({ foo: 'bar' }).toHaveProperty('foo');
  });
});


describe('Working with Functions', () => {
  it('Spying', () => {
    const func = jest.fn();

    func();
    expect(func).toHaveBeenCalled();

    func('foo');
    expect(func).toHaveBeenCalledWith('foo');
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('Mocking', () => {
    const func = jest.fn(() => { return true });
    func.mockImplementation(() => { return false });

    func();
    expect(func).toHaveReturnedWith(false);
  });
});
