const {Goods, validateGoods} = require("./GoodsM");
const cors = require("cors");
const multer = require("multer");
const path = require('path')
const express = require('express');
const router = express.Router();

router.use(cors())
router.use('image', express.static(path.join(__dirname, 'public')))

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.get("/:id", async (req, res) => {
  const find_goods = await Goods.find({ menu: req.params.id });
  res.status(200).send(find_goods)
});
router.get("/", async (req, res) => {
  const find_goods = await Goods.find();
  res.status(200).send(find_goods)
});
router.get("/:id/single", async (req, res) => {
  const find_goods = await Goods.findById(req.params.id);
  res.status(200).send(find_goods)
});
router.post('/', upload.single("image"), async (req, res) => {
  const { error } = validateGoods(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  newgoods = new Goods({
    price: req.body.price,
    name: req.body.name,
    menu: req.body.menu,
    info: req.body.info,
    code: req.body.code,
    image: {
      data: req.file
    }
  })
  await newgoods.save(); 
  res.status(200).send(newgoods);
});
router.delete("/:id", async (req, res) => {
  const removeGoods = await Goods.findByIdAndRemove(req.params.id);

  if (!removeGoods) return res.status(404).send('This goods with the given ID was not found.');

  res.send(removeGoods);
});
router.put("/:id", async (req, res) => {
  const { error } = validateGoods(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const putGoods = await Goods.findByIdAndUpdate(req.params.id, { name: req.body.name, price: req.body.price, info: req.body.info}, {
    new: true
  });

  if (!putGoods) return res.status(404).send('The goods with the given ID was not found.');
  
  res.send(putGoods);
});

module.exports = router;