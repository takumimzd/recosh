import { memo, VFC, useState } from "react"
// type
import { ProcessType } from "types/recipes"
// constants
import { DFAULT_PROCESS_FORM_NUMBER } from "constants/recipe"
// chakra
import { FormControl, FormLabel, Box, OrderedList, ListItem, Center } from "@chakra-ui/react"
// hooks
import usePostRecipe from "hooks/apiRequest/recipe/usePostRecipe"
// common component
import { Textarea } from "../../../../common/form/Textarea"
import { Input } from "../../../../common/form/Input"
// domain component
import RecipeCreateButton from "../button/RecipeCreateButton"
import RecipeProcessAddButton from "../button/RecipeProcessAddButton"

type ExpandEventTarget = EventTarget & {
  title: HTMLFormElement
  ingredients: HTMLFormElement
  description: HTMLFormElement
  process: HTMLFormElement[]
};

export const RecipeNewPageTemplate: VFC = memo(() => {
  const [processFormCount, setProcessFormCount] = useState(DFAULT_PROCESS_FORM_NUMBER)

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ExpandEventTarget
    const process: ProcessType[] = [...Array(processFormCount)].map((_, i) => {
      return {description: target.process[i].value, order: i + 1, image_src: "image"}
    })

    const usePostRecipeProps = {
      title: target.title.value,
      ingredients: target.ingredients.value,
      description: target.description.value,
      process: process
    }

    usePostRecipe(usePostRecipeProps)
  }
  return (
    <Center>
      <Box w="80%">
      <form onSubmit={handleOnSubmit}>
        <FormControl>
            <FormLabel>料理名</FormLabel>
            <Input id="title" styles={{mb: "2"}} />
            <FormLabel>紹介文</FormLabel>
            <Textarea id="description" styles={{mb: "2", minHeight: 150}} />
            <FormLabel>材料</FormLabel>
            <Textarea id="ingredients" styles={{mb: "2", minHeight: 100}} />
            <FormLabel>作り方</FormLabel>
            <OrderedList>
              {[...Array(processFormCount)].map((_, i) => {
                return <ListItem mb={2} key={i}><Textarea id="process" /></ListItem>
              })}
            </OrderedList>
            <RecipeProcessAddButton
              processFormCount={processFormCount}
              setProcessFormCount={setProcessFormCount}
            />
        </FormControl>
        <RecipeCreateButton />
      </form>
    </Box>
    </Center>
  )
});

export default RecipeNewPageTemplate;