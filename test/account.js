const axios = require('axios');
const chai = require('chai');

describe('Account', function () {
  const URL = 'http://localhost:3000/api/accounts';

  describe('GET /api/accounts', () => {
    it('should return array of accounts', (done) => {
      axios
        .get(URL)
        .then((response) => {
          chai.expect(response.status).to.equal(200);
          chai.expect(response.data).to.be.an('array');
        })
        .then(done, done);
    });
  });

  describe('POST /api/accounts', () => {
    it('should insert account', (done) => {
      axios
        .post(URL, {
          first_name: 'Komalpreet',
          last_name: 'Kaur',
          email: 'komalpreet@gmail.com',
          password: '123',
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
