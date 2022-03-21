import useFetch from "../common/useFetch"
import requestFetchRecipes from "../../../api/recipes/requestFetchRecipes"
import { RequestFetchRecipeType } from "../../../types/api/recipe"

const useFetchRecipes = () => {
  const fetcher = () => requestFetchRecipes()
  const { data, error } = useFetch<RequestFetchRecipeType[]>({key: "/", fetcher})
  return { recipes: data || [], error }
}

export default useFetchRecipes