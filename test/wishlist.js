const io = require('socket.io-client');
const chai = require('chai');

describe('Wish List Socket', () => {
  let socketClient;

  beforeEach((done) => {
    socketClient = io('http://localhost:3000');
    done();
  });

  afterEach((done) => {
    socketClient.disconnect();
    done();
  });

  it('should add item to wish list', (done) => {
    socketClient.emit('wishList:add', 'Samsung TV');
    socketClient.on('wishList:updated', (wishList) => {
      chai.expect(wishList.length).to.equal(1);
      done();
    });
  });

  it('should remove item from wish list', (done) => {
    socketClient.emit('wishList:remove', 'Samsung TV');
    socketClient.on('wishList:updated', (wishList) => {
      chai.expect(wishList.length).to.equal(0);
      done();
    });
  });
});
