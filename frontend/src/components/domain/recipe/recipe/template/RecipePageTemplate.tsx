import React from 'react'
import Image from 'next/image'
import useFetchRecipe from '@/hooks/apiRequest/recipe/useFetchRecipe'
import useGetQuery from '@/hooks/useGetQuery'
import DeleteRecipeButton from '@/components/domain/recipe/recipe/button/DeleteRecipeButton'

const RecipePageTemplate = () => {
  const query = useGetQuery("id")
  const { recipe, error } = useFetchRecipe(Number(query))

  if (error) return <p>エラー</p>
  if (!recipe) return <p>レシピがありません。</p>

  return (
    <div>
      <p>{recipe.id}</p>
      <p>{recipe.title}</p>
      <p>{recipe.ingredient}</p>
      <p>{recipe.description}</p>
      <p>{recipe.createdAt}</p>
      <p>{recipe.process.map(processItem => {
        return (
          <div>
            <p>{processItem.order}</p>
            <p>{processItem.id}</p>
            <p>{processItem.description}</p>
          </div>
        )
      })}</p>
      <Image
        src={recipe.image_src}
        width={600}
        height={600}
      />
      <DeleteRecipeButton id={Number(query)} />
    </div>
  )
}

export default RecipePageTemplate;