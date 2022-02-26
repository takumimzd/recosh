import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Delete,
  Body,
} from "@nestjs/common";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./entities/recipe.entity";
import { CreateRecipeDTO } from "./dto/recipe.dto";
import { InsertResult, DeleteResult } from "typeorm";
import { CreateProcessDTO } from "src/process/dto/process.dto";

@Controller("recipes")
export class RecipeController {
  // サービスの呼び出し
  constructor(private readonly service: RecipeService) {}

  // `recipes`のURIへのGETメソッドでレシピの全件取得．サービスの`findAll()`関数を実行．
  @Get()
  async getRecipeList(): Promise<Recipe[]> {
    return await this.service.findAll();
  }

  // レシピの作成。@QueryでURLのパラメータを取得できる.
  @Post()
  async addRecipe(
    @Body("recipe") recipe: CreateRecipeDTO,
    @Body("process") process: CreateProcessDTO[],
  ): Promise<InsertResult> {

    return await this.service.create(recipe, process);
  }

  // `recipes/id番号`のURIへのGETメソッドでid指定で1件データ取得．
  @Get(":id")
  async getRecipe(@Param("id") id: string): Promise<Recipe> {
    return await this.service.find(Number(id));
  }
  @Delete(":id/delete")
  async deleteRecipe(@Param("id") id: string): Promise<DeleteResult> {
    return await this.service.delete(Number(id));
  }
}