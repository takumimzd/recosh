import useFetch from "../common/useFetch"
import requestFetchRecipes from "../../../api/recipes/requestFetchRecipes"
import { RecipeType } from "../../../types/recipes"

const useFetchRecipes = () => {
  const fetcher = () => requestFetchRecipes()
  const { data, error } = useFetch<RecipeType[]>({key: "/", fetcher})
  return { recipes: data || [], error }
}

export default useFetchRecipes