const axios = require('axios');
const chai = require('chai');

describe('Contact', function () {
  const URL = 'http://localhost:3000/api/contact';

  describe('GET /api/contact', () => {
    it('should return array of contact', (done) => {
      axios
        .get(URL)
        .then((response) => {
          chai.expect(response.status).to.equal(200);
          chai.expect(response.data).to.be.an('array');
        })
        .then(done, done);
    });
  });

  describe('POST /api/contact', () => {
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
          chai.expect(response.data).to.have.property('message').to.equal('Contact inserted');
        })
        .then(done, done);
    });
  });
});
