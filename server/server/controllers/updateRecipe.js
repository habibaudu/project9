import recipejson from '../models/recipe.json';

export default {
update(req,res) {
     for (let i = 0; i < recipejson.length; i++) {
       if (recipejson[i].id === parseInt(req.params.recipeId, 10)) {
         recipejson[i].recipe = req.body.recipe;
         recipejson[i].Ingredient = req.body.Ingredient;
         return res.json({
           message: 'updated sucessfully',
           error: false
         });
       }
     }
     return res.status(404).json({
       message: 'Recipe not found',
       error: true
     });
   

   }
};
