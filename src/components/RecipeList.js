import {Link} from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import './RecipeList.css';

export default function RecipeList({recipes}) {

  const {mode} = useTheme();

  if(recipes.length===0){
    return <div className="error">No Recipes to load...</div>
  }

  return (
    <div className="recipe-list">
      {
        recipes.map(recipe=>{
          return(
            <div className={`card ${mode}`} key={recipe.id}>
              <h3 className="page-title">{recipe.title}</h3>
              <p>{recipe.cookingTime} to make.</p>
              <div>{recipe.method.substring(0,100)}...</div>
              <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
            </div>
          )
        })
      }
    </div>

  )
}

