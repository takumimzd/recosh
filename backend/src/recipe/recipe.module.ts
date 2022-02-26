import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipeService } from "./recipe.service";
import { Recipe } from "src/recipe/entities/recipe.entity";
import { RecipeController } from "./recipe.controller";
import { ProcessService } from 'src/process/process.service';
import { Process } from 'src/process/entities/process.entity';

@Module({
  controllers: [RecipeController],
  imports: [TypeOrmModule.forFeature([Recipe, Process])],
  providers: [RecipeService, ProcessService],
})
export class RecipeModule {}