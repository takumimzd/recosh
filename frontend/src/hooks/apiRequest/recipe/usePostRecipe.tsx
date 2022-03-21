import requestPostRecipe from "api/recipes/requestPostRecipe"
import { requestPostRecipePropsType } from "types/recipes"

const usePostRecipe = async (props: requestPostRecipePropsType) => {
  const data = await requestPostRecipe(props)
  
  return data
}

export default usePostRecipe