let wishList = [];

module.exports = (io, socket) => {
  // Add item to wish list
  const addItem = (item) => {
    wishList.push(item);
    socket.emit('wishList:updated', wishList);
    socket.broadcast.emit('wishList:updated', wishList);
  };

  // Remove item from wish list
  const removeItem = (name) => {
    wishList = wishList.filter((item) => item !== name);
    socket.emit('wishList:updated', wishList);
    socket.broadcast.emit('wishList:updated', wishList);
  };

  socket.on('wishList:add', addItem);
  socket.on('wishList:remove', removeItem);
};
