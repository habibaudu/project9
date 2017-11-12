
import deleteControls from '../controllers/deleteRecipe.js';
import addControls from '../controllers/addRecipe.js';
import updateControls from '../controllers/updateRecipe.js';
import reviewControls from '../controllers/addReview.js';
import getControls from '../controllers/allRecipes.js';
import sortControls from '../controllers/sortRecipes.js';

 module.exports = (app) => {
   let sortedDate;
   app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the Recipes API!',
   }));

   app.get('/api/recipes',getControls.getRecipe); 
   app.post('/api/recipes',addControls.add); 
   app.delete('/api/recipes/:recipeId',deleteControls.delete); 
   app.put('/api/recipes/:recipeId',updateControls.update); 
   app.post('/api/recipes/:recipeId/reviews',reviewControls.Reviews);
   app.all('/api/recipes/:RecipeId/', (req, res) =>
     res.status(405).send({
       message: 'Method Not Allowed',
     }));
};
