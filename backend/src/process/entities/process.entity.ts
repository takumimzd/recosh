import { Recipe } from "src/recipe/entities/recipe.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Process {
  // @PrimaryGeneratedColumn() => 主キー
  @PrimaryGeneratedColumn()
  readonly id: number;
  
  @Column()
  description: string;

  @Column()
  image_src: string;

  @Column()
  // レシピの手順の順番
  order: number;

  @CreateDateColumn()
  // @CreateDateColumn() => created_at
  readonly createdAt?: Date;

  @UpdateDateColumn()
  // @UpdateDateColumn() => updated_at
  readonly updatedAt?: Date;

  @ManyToOne(()=> Recipe, recipe => recipe.process)
  recipe: Recipe
}