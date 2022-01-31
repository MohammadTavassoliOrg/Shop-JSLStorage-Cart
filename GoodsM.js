const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const goodsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 225,
  },
  price: {
    type: Number,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId
  },
  image: {
    data: Object
  },
  code: {
    type: String,
    required: true
  }
});
const Goods = mongoose.model('Goods', goodsSchema);

function validateGoods (goods) {
  const schema = {
    name: Joi.string().min(1).max(225).required(),
    price: Joi.number().required(),
    menu: Joi.objectId(),
    info: Joi.string().required(),
    code: Joi.string().required()
  }
  return Joi.validate(goods, schema);
};

exports.validateGoods = validateGoods;
exports.Goods = Goods;