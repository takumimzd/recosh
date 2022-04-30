import { RecipeProcessFormType } from "@/types/domain/recipe"

export interface RequestFetchRecipeType {
  id: number
  title: string
  description: string
  ingredient: string
  hour: string
  image_src: string
  createdAt: string
  updatedAt: string
  process: RequestFetchRecipeProcessType[]
}

export interface RequestFetchRecipeProcessType {
  id: number
  description: string
  image_src: string
  order: number
  createdAt: string
  updatedAt: string
}

export interface RequestPostRecipePropsType {
  title: string
  imageSrc: string
  ingredients: string
  description: string
  process: (RecipeProcessFormType | null)[]
}
