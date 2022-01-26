const {Menu, validateMenu} = require("./menuM");
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    const menu = await Menu.find({name: req.body.name});
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

module.exports = router;
