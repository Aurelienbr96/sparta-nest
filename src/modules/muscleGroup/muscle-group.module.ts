import { Module } from '@nestjs/common';

import { MuscleGroupService } from './muscle-group.service';
import { MuscleGroupController } from './muscle-group.controller';

@Module({
  providers: [MuscleGroupService],
  controllers: [MuscleGroupController],
  exports: [MuscleGroupService],
})
export class MuscleGroupModule {}
