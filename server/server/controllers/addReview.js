import recipejson from '../models/recipe.json';

export default {
Reviews(req,res) {
  for (let i = 0; i < recipejson.length; i++) {
       if (recipejson[i].id === parseInt(req.params.recipeId, 10)) {
         recipejson[i].reviews.push(req.body);
         return res.json({
           message: 'Reviews Created sucessfully',
           error: false
         });
       }
     }

   }
};
