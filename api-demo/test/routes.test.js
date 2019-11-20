const request = require('supertest');
const api = request('api-demo:3000');

describe('Routes', () => {
  it('GET /foo', (done) => {
    api.get('/foo')
      .expect(200)
      .then((res) => {
        expect(res.text).toEqual('bar');
        done();
      });
  });
});
