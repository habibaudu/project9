import recipejson from '../models/recipe.json';

export default {
add(req,res) {
      if (!req.body.user && !req.body.name && !req.body.id && !req.body.Description && !req.body.Ingredient) {
       return res.json({
         message: 'No recipe added',
         error: true
       });
     }
     recipejson.push(req.body);
     return res.json({
       message: 'Created successfully',
       error: false
     });
   }
};
