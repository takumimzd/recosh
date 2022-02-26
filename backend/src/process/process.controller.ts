import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDTO } from './dto/process.dto';

@Controller('process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}

}
