import { Delete } from "@/api/base/delete"

const requestDeleteRecipe = async (id: number) => {

  const response = await Delete(`recipes/${id}/delete`)
  
  return response
}

export default requestDeleteRecipe