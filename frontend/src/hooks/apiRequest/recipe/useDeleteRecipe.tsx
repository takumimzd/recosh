import requestDeleteRecipe from "@/api/recipes/requestDeleteRecipe"

const useDeleteRecipe = (id: number) => {
  const response = requestDeleteRecipe(id)
  
  return response
}

export default useDeleteRecipe