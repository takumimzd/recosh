import { Injectable } from "@nestjs/common";
import { Recipe } from "src/recipe/entities/recipe.entity";
import { Repository, InsertResult, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Process } from "src/process/entities/process.entity";
import { CreateRecipeDTO } from "./dto/recipe.dto";
import { CreateProcessDTO } from "src/process/dto/process.dto";
import { ProcessService } from "src/process/process.service";

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
    @InjectRepository(Process)
    private readonly processRepository: Repository<Process>,
    private readonly proseccService: ProcessService
  ) {}

  // テーブルの全レシピを取得する
  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepository.find();
  }

  // テーブルにレシピを追加する
  async create(recipe: CreateRecipeDTO, process: CreateProcessDTO[]): Promise<InsertResult> {

    await this.recipeRepository.insert(recipe)

    // ↑でinsertしたレシピを取得する
    const recipeId = this.recipeRepository.findOne({ 
      order: { id: 'DESC' } 
    })

    process.forEach(async p => {
      p.recipe = await recipeId
      await this.processRepository.insert(p)
    })
    return null
  }

  // idを指定してテーブルから1件のレシピを取得する
  async find(id: number): Promise<Recipe> | null {
    return await this.recipeRepository.findOne({ id: id });
  }

  // idを指定してレシピを更新する
  async update(id: number, recipe): Promise<UpdateResult> {
    return await this.recipeRepository.update(id, recipe);
  }

  //  idを指定してレシピを削除する
  async delete(id: number): Promise<DeleteResult> {
    const recipe = await this.recipeRepository.findOne({ id: id });
    await this.proseccService.deleteByRecipe(recipe)
    return await this.recipeRepository.delete(id);
  }
}