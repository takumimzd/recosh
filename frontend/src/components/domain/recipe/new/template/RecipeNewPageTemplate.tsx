import { memo, VFC, useState } from "react"
import { useRouter } from "next/router"
// type
import { ProcessType, RecipeFormType } from "types/recipes"
// constants
import { DFAULT_PROCESS_FORM_NUMBER } from "constants/recipe"
// chakra
import { FormControl, FormLabel, Box, OrderedList, ListItem, Center, useToast } from "@chakra-ui/react"
// hooks
import usePostRecipe from "../../../../../hooks/apiRequest/recipe/usePostRecipe"
// common component
import { Textarea } from "../../../../common/form/Textarea"
import { Input } from "../../../../common/form/Input"
import SuccessToast from "components/common/toast/successToast"
import ErrorToast from "components/common/toast/ErrorToast"
// domain component
import RecipeCreateButton from "../button/RecipeCreateButton"
import RecipeProcessAddButton from "../button/RecipeProcessAddButton"
// utilities
import uploadImage from "../../../../../utilities/uploadImage"
import { recipeFormValidation } from "../../../../../utilities/validations/recipeFormValidation"
import { removeNullFromArray } from "utilities/removeNullFromArray"

type ExpandEventTarget = EventTarget & {
  title: HTMLFormElement
  ingredients: HTMLFormElement
  description: HTMLFormElement
  process: HTMLFormElement[]
  files: HTMLFormElement
};

export const RecipeNewPageTemplate: VFC = memo(() => {
  const [processFormCount, setProcessFormCount] = useState(DFAULT_PROCESS_FORM_NUMBER)
  const [recipeImageSrc, setRecipeImageSrc] = useState("")
  const router = useRouter();
  const toast = useToast()

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ExpandEventTarget

    let i = 0
    const process: (ProcessType | null)[] = [...Array(processFormCount)].map(() => {
      if (!target.process[i].value) {
        i = i + 1
        return null
      }
      i = i + 1
      return {description: target.process[i - 1].value, order: i, image_src: "image"}
    })
    
    // 手順がnullの要素を削除する
    const removedNullProcess = removeNullFromArray(process)

    const recipeItem: RecipeFormType = {
      title: target.title.value,
      imageSrc: recipeImageSrc,
      ingredients: target.ingredients.value,
      description: target.description.value,
      process: removedNullProcess
    }

    const validationMessage =  recipeFormValidation(recipeItem)
    
    if (!!validationMessage.length) {
      validationMessage.forEach(message => {
        ErrorToast({text: message, toast})
      })
      return null
    }

    const data = await usePostRecipe(recipeItem)
    if (data.status === 201) {
      router.push("/recipes")
      SuccessToast({text: "レシピを公開しました", toast})
    } else {
      ErrorToast({text: "レシピの公開に失敗しました。", toast})
    }
    
  }

  const handleOnChange = (event: any) => {
    const image = event.target.files[0]
    const storage = uploadImage(image)
    storage.ref(`/images/${image.name}`).getDownloadURL().then((src: any) => {
      setRecipeImageSrc(src);
    })
  }

  return (
    <Center>
      <Box w="80%">
      <form onSubmit={handleOnSubmit}>
        <FormControl>
          <FormLabel>料理名</FormLabel>
          <Input id="title" styles={{mb: "2"}} />
          <FormLabel>写真</FormLabel>
          <input type="file" onChange={handleOnChange}/>
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