import { Module } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './entities/process.entity';

@Module({
  controllers: [ProcessController],
  imports: [TypeOrmModule.forFeature([Process])],
  providers: [ProcessService]
})
export class ProcessModule {}
