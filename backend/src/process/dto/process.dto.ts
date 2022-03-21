import { IsNotEmpty, IsString } from "class-validator"
import { Recipe } from "src/recipe/entities/recipe.entity"

export class CreateProcessDTO {

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  image_src: string;

  @IsNotEmpty()
  @IsString()
  order: number;

  recipe: Recipe
}