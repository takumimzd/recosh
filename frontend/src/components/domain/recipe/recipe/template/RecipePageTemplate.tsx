import React from 'react'
import useFetchRecipe from '@/hooks/apiRequest/recipe/useFetchRecipe'
import useGetQuery from '@/hooks/useGetQuery'
import DeleteRecipeButton from '@/components/domain/recipe/recipe/button/DeleteRecipeButton'
import { Box, Center, Image } from '@chakra-ui/react'

const RecipePageTemplate = () => {
  const query = useGetQuery('id')
  const { recipe, error } = useFetchRecipe(Number(query))

  if (error) return <p>エラー</p>
  if (!recipe) return <p>レシピがありません。</p>

  return (
    <Center>
      <Box w='80%'>
        <Image
          src={recipe.image_src}
          alt={`${recipe.title}の画像`}
          width={350}
          height={350}
          borderRadius='xl'
        />
        <p>{recipe.title}</p>
        <p>{recipe.ingredient}</p>
        <p>{recipe.description}</p>
        <p>
          {recipe.process.map((processItem) => {
            return (
              <div key={processItem.id}>
                <p>{processItem.order}</p>
                <p>{processItem.description}</p>
              </div>
            )
          })}
        </p>
        <DeleteRecipeButton id={Number(query)} />
      </Box>
    </Center>
  )
}

export default RecipePageTemplate
