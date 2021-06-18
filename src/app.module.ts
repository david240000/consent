import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsentService } from './consent/consent.service';
import { ConsentModule } from './consent/consent.module';
import { Consents } from './consent/consents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv'

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'consent',
      entities: [Consents],
      synchronize: true,
    }),
    ConsentModule,
  ],
})
export class AppModule {}
