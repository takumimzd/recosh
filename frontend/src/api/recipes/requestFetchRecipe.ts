import get from "api/base/get"

const requestFetchRecipe = async (recipeId: number) => {
  const fetcher = await get(`/recipes/${recipeId}`)
  return fetcher
}

export default requestFetchRecipe