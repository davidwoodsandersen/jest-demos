describe('Google', () => {
  it('should be titled "Google"', async (done) => {
    await page
      .goto('https://google.com')
      .catch(e => console.log(e));
    await expect(page.title()).resolves.toMatch('Google');
    done();
  });
});
