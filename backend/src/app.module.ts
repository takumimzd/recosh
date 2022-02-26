import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"; 
import { RecipeModule } from './recipe/recipe.module';
import { ProcessModule } from './process/process.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RecipeModule, ProcessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
