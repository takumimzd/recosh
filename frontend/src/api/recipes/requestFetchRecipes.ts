import get from "@/api/base/get"

const requestFetchRecipes = async () => {
  const fetcher = await get("recipes")
  return fetcher
}

export default requestFetchRecipes