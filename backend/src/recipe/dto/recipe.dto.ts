import { IsNotEmpty, IsString } from "class-validator";

export class CreateRecipeDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  ingredient: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image_src: string;

  @IsNotEmpty()
  @IsString()
  hour: string;
}