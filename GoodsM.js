// const {homeAppliancesSchema, validatehome} = require("./meno");
// const mongoose = require("mongoose");
// const Joi = require("joi");
// const { string } = require("joi");

// const listhomeAppliancesSchema = new mongoose.Schema({
//     Refrigerator: {
//         type: string,
//         require: true,
//         meno: {
//             type: mongoose.Schema.Types.ObjectId
//         }
//     }
// });
// const listHome = mongoose.model("listHome", listHomeSchema);

// function validatelistHome (listhome) {
//     const schema = {
//       Refrigerator: Joi.string(),
//       meno: Joi.objectId()
//     }
//     return Joi.validate(task, schema);
//   };
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
  menu: {
    type: mongoose.Schema.Types.ObjectId
  }
});
const Goods = mongoose.model('Goods', goodsSchema);

function validateGoods (goods) {
  const schema = {
    name: Joi.string().min(1).max(225).required(),
    price: Joi.number().required(),
    menu: Joi.objectId()
  }
  return Joi.validate(goods, schema);
};

exports.validateGoods = validateGoods;
exports.Goods = Goods;