const {Goods, validateGoods} = require("./GoodsM");
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
  const find_goods = await Goods.find({name: req.body.name});
  if (!find_goods) return res.status(404).send("this thask is not defined🦍")

  res.status(200).send(find_goods)
});

router.post('/', async (req, res) => {
  const { error } = validateGoods(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  newgoods = new Goods({
    price: req.body.price,
    name: req.body.name,
    menu: req.body.menu
  });
  await newgoods.save(); 
  res.status(200).send(newgoods);
  console.log(req.body._id);
});

module.exports = router;