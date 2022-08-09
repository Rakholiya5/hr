var recipes = require('../recipes.json');
var router = require('express').Router();

router.get("/recipes", (req, res)=>{
  res.send("")
})

module.exports = router;

