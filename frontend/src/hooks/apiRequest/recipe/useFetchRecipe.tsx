import useFetch from "@/hooks/apiRequest/common/useFetch"
import requestFetchRecipe from "@/api/recipes/requestFetchRecipe"
import { RequestFetchRecipeType } from "@/types/api/recipe"

const useFetchRecipe = (recipeId: number) => {
  const fetcher = () => requestFetchRecipe(recipeId)
  const { data, error } = useFetch<RequestFetchRecipeType>({key: `/recipes/${recipeId}`, fetcher})
  return { recipe: data || null, error }
}

export default useFetchRecipe