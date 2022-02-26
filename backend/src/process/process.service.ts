import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipe/entities/recipe.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Process } from './entities/process.entity';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(Process)
    private readonly processRepository: Repository<Process>
  ) {}

  async deleteByRecipe(recipe: Recipe): Promise<DeleteResult> {
    return await this.processRepository.delete({recipe: recipe});
  }
}
