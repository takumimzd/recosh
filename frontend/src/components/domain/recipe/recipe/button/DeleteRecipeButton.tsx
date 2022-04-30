import Router from 'next/router'
import { PrimaryButton } from "@/components/common/button/PrimaryButton"
import useDeleteRecipe from '@/hooks/apiRequest/recipe/useDeleteRecipe'

const DeleteRecipeButton = ({ id }: {id: number}) => {  
  const deleteButtonOnClick = () => {
    useDeleteRecipe(Number(id))
    Router.push("/recipes")
  }

  return (
    <PrimaryButton onClick={deleteButtonOnClick}>削除</PrimaryButton>
  )
}

export default DeleteRecipeButton