export interface RecipeType {
  id: number
  title: string
  description: string
  ingredient: string
  hour: string
  image_src: string
  createdAt: string
  updatedAt: string
}

export type RequestFetchRecipeType = RecipeType

export interface requestPostRecipePropsType {
  title: string
  imageSrc: string
  ingredients: string
  description: string
  process: (RecipeProcessType | null)[]
}

export type RecipeFormType = requestPostRecipePropsType

export interface RecipeProcessType {
  description: string
  image_src?: string
  order: number
}
