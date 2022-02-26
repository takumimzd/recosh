import requestPostRecipe from "api/recipes/requestPostRecipe"
import { requestPostRecipePropsType } from "types/recipes"

const usePostRecipe = (props: requestPostRecipePropsType) => {
  const response = requestPostRecipe(props)
  
  return response
}

export default usePostRecipe