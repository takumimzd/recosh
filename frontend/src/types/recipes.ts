export interface RecipeType {
  id: number
  title: string
  description: string
  ingredient: string
}

export interface requestPostRecipePropsType {
  title: string
  ingredients: string
  description: string
  process: ProcessType[]
}

export interface ProcessType {
  description: string
  image_src?: string
  order: number
}

