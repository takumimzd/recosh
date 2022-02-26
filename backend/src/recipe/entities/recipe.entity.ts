import { Process } from "src/process/entities/process.entity"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm"

@Entity()
export class Recipe {
  // @PrimaryGeneratedColumn() => 主キー
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  title: string;
  
  @Column()
  description: string;

  @Column()
  ingredient: string;

  @Column()
  image_src: string;

  @Column()
  hour: string;

  @CreateDateColumn()
  // @CreateDateColumn() => created_at
  readonly createdAt?: Date;

  @UpdateDateColumn()
  // @UpdateDateColumn() => updated_at
  readonly updatedAt?: Date;

  @OneToMany(() => Process, process => process.recipe)
  process: Process[];
}