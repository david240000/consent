import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsentController } from './consent.controller';
import { ConsentService } from './consent.service';
import { Consents } from './consents.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Consents])],
  controllers: [ConsentController],
  providers: [ConsentService]
})
export class ConsentModule {}
