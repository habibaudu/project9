import recipejson from '../models/recipe.json';

export default {
delete(req,res)  {

     for (let i = 0; i < recipejson.length; i++ ) {
       if (recipejson[i].id === parseInt(req.params.recipeId, 10)) {
         recipejson.splice(i, 1);
         return res.json({
           message: 'deleted successfully',
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
