import Router from 'next/router'
import { DangerButton } from "@/components/common/button/DangerButton"
import useDeleteRecipe from '@/hooks/apiRequest/recipe/useDeleteRecipe'

const DeleteRecipeButton = ({ id }: {id: number}) => {  
  const deleteButtonOnClick = () => {
    useDeleteRecipe(Number(id))
    Router.push("/recipes")
  }

  return (
    <DangerButton onClick={deleteButtonOnClick}>削除</DangerButton>
  )
}

export default DeleteRecipeButton