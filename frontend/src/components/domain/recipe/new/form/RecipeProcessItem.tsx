import { Dispatch, SetStateAction } from "react"
import { Textarea } from "@chakra-ui/react"
import uploadImage from "utilities/uploadImage"
import { RecipeProcessImgType } from "../template/RecipeNewPageTemplate"

interface Props {
  index: number
  recipeProcessImg: RecipeProcessImgType[]
  setRecipeProcessImg: Dispatch<SetStateAction<RecipeProcessImgType[]>>
}

const RecipeProcessItem = ({index, recipeProcessImg, setRecipeProcessImg}: Props) => {

  const handleOnChange = (event: any) => {
    const image = event.target.files[0]
    const storage = uploadImage(image)

    storage.ref(`/images/${image.name}`).getDownloadURL().then((src: any) => {
      const image = { order: index, src }
      
      const updatedImage = [...recipeProcessImg, image]
      setRecipeProcessImg(updatedImage)
    })
  }
  
  return (
    <>
      <input type="file" onChange={handleOnChange} />
      <Textarea id="process" />
    </>
  )
}

export default RecipeProcessItem