const {Menu, validateMenu} = require("../models/menuM");
const express = require('express');
const router = express.Router();

router.get("/:id", async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    res.send(menu);   
});
router.get("/", async (req, res) => {
  const menu = await Menu.find();
  res.send(menu);   
});
router.post("/", async (req, res) => {
    const { error } = validateMenu(req.body);
    if ( error ) return res.status(400).send(error.details[0].message);
  newmenu = new Menu({
    faction: req.body.faction
  });
  await newmenu.save(); 
  res.status(200).send(newmenu);
});

router.delete("/:id", async (req, res) => {
  const removeMenu = await Menu.findByIdAndRemove(req.params.id);

  if (!removeMenu) return res.status(404).send('This menu with the given ID was not found.');

  res.send(removeMenu);
});
router.put("/:id", async (req, res) => {
  const { error } = validateMenu(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const putMenu = await Menu.findByIdAndUpdate(req.params.id, { faction: req.body.faction}, {
    new: true
  });

  if (!putMenu) return res.status(404).send('The menu with the given ID was not found.');
  
  res.send(putMenu);
});


module.exports = router;
