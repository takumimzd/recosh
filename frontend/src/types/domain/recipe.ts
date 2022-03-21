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

export interface RecipeProcessFormType {
  description: string
  image_src?: string
  order: number
}

export interface RecipeFormType {
  title: string
  imageSrc: string
  ingredients: string
  description: string
  process: (RecipeProcessFormType | null)[]
} 