import useFetch from "../common/useFetch"
import requestFetchRecipe from "../../../api/recipes/requestFetchRecipe"
import { RecipeType } from "types/recipes"

const useFetchRecipe = (recipeId: number) => {
  const fetcher = () => requestFetchRecipe(recipeId)
  const { data, error } = useFetch<RecipeType>({key: `/recipes/${recipeId}`, fetcher})
  return { recipe: data || null, error }
}

export default useFetchRecipe