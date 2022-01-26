// const mongoose = require("mongoose");
// const Joi = require("joi");

// const homeAppliancesSchema = new mongoose.Schema({
//     homeAppliances: {
//         type: String,
//         required: true
//     }
// });
// const home = mongoose.model("home", homeAppliancesSchema);

// function validatehome ( homeValidate ) {
//     const schema = {
//       homeAppliancesSchema: Joi.string()
//     }
//     return Joi.validate(homeValidate, schema);
// };

// exports.validatehome = validatehome;
// exports.homeAppliancesSchema = homeAppliancesSchema;

// const jwt = require('jsonwebtoken');
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

// userSchema.methods.generateAuthToken = function() { 
//   const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, process.env.jwtPrivateKey);
//   return token;
// }

const Menu = mongoose.model('Menu', menuSchema);

function validateMenu (menu) {
  const schema = {
    faction: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(menu, schema);
}
exports.Menu = Menu;
exports.validateMenu = validateMenu;