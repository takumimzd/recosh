import { RecipeFormType } from "../../types/domain/recipe"

export const recipeFormValidation = (recipeItem: RecipeFormType) => {
  let validationMessage = []

  if (!recipeItem.title) {
    validationMessage.push("料理名を書きましょう")
  }

  if (!recipeItem.imageSrc) {
    validationMessage.push("写真を載せましょう")
  }

  if (!recipeItem.description) {
    validationMessage.push("紹介文を書きましょう")
  }

  if (!recipeItem.ingredients) {
    validationMessage.push("材料を書きましょう")
  }

  console.log(recipeItem.process);
  
  if (recipeItem.process.length === 0) {
    validationMessage.push("手順を書きましょう")
  }

  return validationMessage

}