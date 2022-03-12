export interface RecipeType {
  id: number
  title: string
  description: string
  ingredient: string
}

export interface requestPostRecipePropsType {
  title: string
  imageSrc: string
  ingredients: string
  description: string
  process: (ProcessType | null)[]
}

export type RecipeFormType = requestPostRecipePropsType

export interface ProcessType {
  description: string
  image_src?: string
  order: number
}

