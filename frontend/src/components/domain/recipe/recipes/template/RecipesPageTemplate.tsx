import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Grid, GridItem, Link } from '@chakra-ui/react'
import useFetchRecipes from '../../../../../hooks/apiRequest/recipe/useFetchRecipes'




const ResipesPageTemplate = () => {
  const { recipes, error } = useFetchRecipes()

  if (!recipes) return <div>レシピがありません</div>
  if (error) return <div>エラー</div>
  
  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={2} >
        {recipes.map(recipe =>  {
          return (
            <NextLink href={`/recipes/${recipe.id}`}>
              <Link>
                <GridItem mr={1} ml={1}>
                  <Image
                    src={"/images/sample_recipe.jpg"}
                    width={300}
                    height={300}
                  />
                  {recipe.title}
                </GridItem>
              </Link>
            </NextLink>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ResipesPageTemplate;