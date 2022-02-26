import { requestPostRecipePropsType } from "types/recipes"
import { Post } from "api/base/post"

const requestPostRecipe = (props: requestPostRecipePropsType) => {
  const { title, ingredients, description, process } = props

  const data = {
    recipe: {
      title: title,
      ingredient: ingredients,
      description: description,
      image_src: "image",
      hour: "1時間", 
    },
    process: process
  }

  const response = Post("/recipes", data)
  
  return response
}

export default requestPostRecipe