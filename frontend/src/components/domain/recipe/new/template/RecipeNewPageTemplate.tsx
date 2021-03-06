import { memo, VFC, useState } from 'react'
import { useRouter } from 'next/router'
// type
import { RecipeProcessFormType, RecipeFormType } from '@/types/domain/recipe'
// constants
import { DFAULT_PROCESS_FORM_NUMBER } from '@/constants/recipe'
// chakra
import {
  FormControl,
  FormLabel,
  Box,
  OrderedList,
  ListItem,
  Center,
  useToast,
} from '@chakra-ui/react'
// hooks
import usePostRecipe from '@/hooks/apiRequest/recipe/usePostRecipe'
// common component
import { Textarea } from '@/components/common/form/Textarea'
import { Input } from '@/components/common/form/Input'
import SuccessToast from '@/components/common/toast/SuccessToast'
import ErrorToast from '@/components/common/toast/ErrorToast'
// domain component
import RecipeProcessItem from '@/components/domain/recipe/new/form/RecipeProcessItem'
import RecipeCreateButton from '@/components/domain/recipe/new/button/RecipeCreateButton'
import RecipeProcessAddButton from '@/components/domain/recipe/new/button/RecipeProcessAddButton'
// utilities
import uploadImage from '@/utilities/uploadImage'
import { recipeFormValidation } from '@/utilities/validations/recipeFormValidation'
import { removeNullFromArray } from '@/utilities/removeNullFromArray'

type ExpandEventTarget = EventTarget & {
  title: HTMLFormElement
  ingredients: HTMLFormElement
  description: HTMLFormElement
  process: HTMLFormElement[]
  files: HTMLFormElement
}

export interface RecipeProcessImgType {
  order: number
  src: string
}

export const RecipeNewPageTemplate: VFC = memo(() => {
  const [processFormCount, setProcessFormCount] = useState(DFAULT_PROCESS_FORM_NUMBER)
  const [recipeImageSrc, setRecipeImageSrc] = useState('')
  const [recipeProcessImg, setRecipeProcessImg] = useState<RecipeProcessImgType[]>([])
  const router = useRouter()
  const toast = useToast()

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as ExpandEventTarget

    let i = 0
    const process: (RecipeProcessFormType | null)[] = [...Array(processFormCount)].map(() => {
      if (!target.process[i].value && !recipeProcessImg[i]) {
        i = i + 1
        return null
      }

      i = i + 1

      const image = recipeProcessImg.map((image) => {
        if (image.order === i) {
          return image.src
        }
      })

      return { description: target.process[i - 1].value, order: i, image_src: image[0] }
    })

    // ?????????null????????????????????????
    const removedNullProcess = removeNullFromArray(process)

    const recipeItem: RecipeFormType = {
      title: target.title.value,
      imageSrc: recipeImageSrc,
      ingredients: target.ingredients.value,
      description: target.description.value,
      process: removedNullProcess,
    }

    const validationMessage = recipeFormValidation(recipeItem)

    if (!!validationMessage.length) {
      validationMessage.forEach((message) => {
        ErrorToast({ text: message, toast })
      })
      return null
    }

    const data = await usePostRecipe(recipeItem)
    if (data.status === 201) {
      router.push('/recipes')
      SuccessToast({ text: '??????????????????????????????', toast })
    } else {
      ErrorToast({ text: '??????????????????????????????????????????', toast })
    }
  }

  const handleOnChange = (event: any) => {
    const image = event.target.files[0]
    const storage = uploadImage(image)
    storage
      .ref(`/images/${image.name}`)
      .getDownloadURL()
      .then((src: any) => {
        setRecipeImageSrc(src)
      })
  }

  return (
    <Center>
      <Box w='80%'>
        <form onSubmit={handleOnSubmit}>
          <FormControl>
            <FormLabel>?????????</FormLabel>
            <Input id='title' styles={{ mb: '2' }} />
            <FormLabel>??????</FormLabel>
            <input type='file' onChange={handleOnChange} />
            <FormLabel>?????????</FormLabel>
            <Textarea id='description' styles={{ mb: '2', minHeight: 150 }} />
            <FormLabel>??????</FormLabel>
            <Textarea id='ingredients' styles={{ mb: '2', minHeight: 100 }} />
            <FormLabel>?????????</FormLabel>
            <OrderedList>
              {[...Array(processFormCount)].map((_, i) => {
                return (
                  <ListItem mb={2} key={i}>
                    <RecipeProcessItem
                      index={i + 1}
                      recipeProcessImg={recipeProcessImg}
                      setRecipeProcessImg={setRecipeProcessImg}
                    />
                  </ListItem>
                )
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
})

export default RecipeNewPageTemplate
