import recipejson from '../models/recipe.json';

export default {
getRecipe(req,res) {
    let sortedDate;
   if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
       sortedDate = recipejson;
       const sorted = sortedDate.sort((a, b) => b.upvotes - a.upvotes);
       const sorted2 = sorted.slice(0, 3);
       return res.status(200).json(sorted2);
     } else if (!req.query.sort === 'upvotes' && !req.query.order === 'desc') {
       return res.json({
         recipe: recipejson,
         error: false
       });
   }
   
}
};
