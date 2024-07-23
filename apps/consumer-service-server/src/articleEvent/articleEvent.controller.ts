import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArticleEventService } from "./articleEvent.service";
import { ArticleEventControllerBase } from "./base/articleEvent.controller.base";

@swagger.ApiTags("articleEvents")
@common.Controller("articleEvents")
export class ArticleEventController extends ArticleEventControllerBase {
  constructor(protected readonly service: ArticleEventService) {
    super(service);
  }
}
