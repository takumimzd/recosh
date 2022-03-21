import { requestPostRecipePropsType } from "types/recipes"
import { Post } from "api/base/post"

const requestPostRecipe = async (props: requestPostRecipePropsType) => {
  const { title, imageSrc, ingredients, description, process } = props

  const postData = {
    recipe: {
      title: title,
      image_src: imageSrc,
      ingredient: ingredients,
      description: description,
      hour: "1時間", 
    },
    process: process
  }

  const { data } = await Post<null>("/recipes", postData)
  
  return data
}

export default requestPostRecipe