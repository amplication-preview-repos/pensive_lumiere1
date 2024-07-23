import { Module } from "@nestjs/common";
import { ArticleEventModuleBase } from "./base/articleEvent.module.base";
import { ArticleEventService } from "./articleEvent.service";
import { ArticleEventController } from "./articleEvent.controller";
import { ArticleEventResolver } from "./articleEvent.resolver";

@Module({
  imports: [ArticleEventModuleBase],
  controllers: [ArticleEventController],
  providers: [ArticleEventService, ArticleEventResolver],
  exports: [ArticleEventService],
})
export class ArticleEventModule {}
