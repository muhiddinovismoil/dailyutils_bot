import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from 'src/config';
import { BotService } from './bot.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([]),
    TelegrafModule.forRootAsync(options()),
  ],
  providers: [BotService],
})
export class BotModule {}
