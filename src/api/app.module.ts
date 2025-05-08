import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { config } from '@/config';
import { BotModule } from '@/api';
@Module({
  imports: [MongooseModule.forRoot(config.DB_URI), BotModule],
})
export class AppModule {}
