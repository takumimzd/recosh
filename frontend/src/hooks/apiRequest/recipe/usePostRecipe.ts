import requestPostRecipe from '@/api/recipes/requestPostRecipe'
import { RequestPostRecipePropsType } from '@/types/api/recipe'

const usePostRecipe = async (props: RequestPostRecipePropsType) => {
  const data = await requestPostRecipe(props)

  return data
}

export default usePostRecipe
