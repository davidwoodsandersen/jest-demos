describe('Google', () => {
  it('should include "google" in text', async (done) => {
    await page.goto('https://google.com').catch();
    const text = await page.evaluate(() =>
      document.body.textContent
    );
    expect(text).toContain('google');
    done();
  });
});
