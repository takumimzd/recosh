import { requestPostRecipePropsType } from "types/recipes"
import { Post } from "api/base/post"

const requestPostRecipe = (props: requestPostRecipePropsType) => {
  const { title, imageSrc, ingredients, description, process } = props

  const data = {
    recipe: {
      title: title,
      image_src: imageSrc,
      ingredient: ingredients,
      description: description,
      hour: "1時間", 
    },
    process: process
  }

  const response = Post("/recipes", data)
  
  return response
}

export default requestPostRecipe