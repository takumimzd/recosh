import React from 'react'
import useFetchRecipe from '@/hooks/apiRequest/recipe/useFetchRecipe'
import useGetQuery from '@/hooks/useGetQuery'
import DeleteRecipeButton from '@/components/domain/recipe/recipe/button/DeleteRecipeButton'
import { Box, Center, Image, Text } from '@chakra-ui/react'

const RecipePageTemplate = () => {
  const query = useGetQuery('id')
  const { recipe, error } = useFetchRecipe(Number(query))

  if (error) return <p>エラー</p>
  if (!recipe) return <p>レシピがありません。</p>

  return (
    <Center>
      <Box maxWidth='60%'>
        <Center>
          <Image
            src={recipe.image_src}
            alt={`${recipe.title}の画像`}
            width={500}
            height={400}
            borderRadius='xl'
          />
        </Center>
        <Center>
          <Text fontSize='2xl' fontWeight='bold' mb={8} mt={4}>
            {recipe.title}
          </Text>
        </Center>
        <p>{recipe.description}</p>
        <Center>
          <Text fontSize='xl' fontWeight='bold' mb={4} mt={8}>
            材料
          </Text>
        </Center>
        <p>{recipe.ingredient}</p>
        <Center>
          <Text fontSize='xl' fontWeight='bold' mb={4} mt={8}>
            手順
          </Text>
        </Center>
        <p>
          {recipe.process.map((processItem) => {
            return (
              <Box mb={4} key={processItem.id}>
                <Text fontWeight='bold'>{processItem.order}</Text>
                {processItem.image_src && (
                  <Center mb={4}>
                    <Image
                      src={processItem.image_src}
                      alt={`手順${processItem.order}の画像`}
                      width={250}
                      height={200}
                      borderRadius='xl'
                    />
                  </Center>
                )}
                <Box borderWidth='initial' minHeight='100' borderRadius='md'>
                  <p>{processItem.description}</p>
                </Box>
              </Box>
            )
          })}
        </p>
        <DeleteRecipeButton id={Number(query)} />
      </Box>
    </Center>
  )
}

export default RecipePageTemplate
