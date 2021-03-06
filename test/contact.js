const axios = require('axios');
const chai = require('chai');

describe('Contact', function () {
  const URL = 'http://localhost:3000/api/contacts';

  describe('GET /api/contacts', () => {
    it('should return array of contacts', (done) => {
      axios
        .get(URL)
        .then((response) => {
          chai.expect(response.status).to.equal(200);
          chai.expect(response.data).to.be.an('array');
        })
        .then(done, done);
    });
  });

  describe('POST /api/contacts', () => {
    it('should insert contact', (done) => {
      axios
        .post(URL, {
          name: 'Komalpreet',
          phone: 123456,
          email: 'komalpreet@gmail.com',
          message: 'Hello world',
        })
        .then((response) => {
          chai.expect(response.status).to.equal(200);
          chai.expect(response.data).to.be.an('object');
          chai.expect(response.data).to.have.property('success').to.equal(true);
        })
        .then(done, done);
    });
  });
});
