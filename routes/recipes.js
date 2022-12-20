var recipes = require('../recipes.json');
var router = require('express').Router();

router.get("/shopping-list", (req, res) => {
    const ids = req.query.ids || []

    if(!ids.length) return res.status(400).send('NOT_FOUND')
    const idx  =  ids.split(',')
     let ingredient = []
    recipes.map(recipe => {
        if(idx.includes(recipe.id.toString())){
            ingredient = [...ingredient, ...recipe.ingredients]
        }
    })
    
     if(ingredient.length) return res.status(200).send(ingredient)
     
    return res.status(404).send('NOT_FOUND')
    
  
   

     
})

module.exports = router;

