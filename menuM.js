const Joi = require('joi');
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    faction: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Menu = mongoose.model('Menu', menuSchema);

function validateMenu (menu) {
  const schema = {
    faction: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(menu, schema);
}
exports.Menu = Menu;
exports.validateMenu = validateMenu;