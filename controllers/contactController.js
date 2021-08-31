const contactService = require('../services/contactService');

const getAllContact = (req, res) => {
  contactService.getAll(res);
};

const insertContact = (req, res) => {
  contactService.insert(req.body, res);
};

module.exports = {
  getAllContact,
  insertContact,
};
