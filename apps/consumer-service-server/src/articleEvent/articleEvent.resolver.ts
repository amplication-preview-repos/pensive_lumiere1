import * as graphql from "@nestjs/graphql";
import { ArticleEventResolverBase } from "./base/articleEvent.resolver.base";
import { ArticleEvent } from "./base/ArticleEvent";
import { ArticleEventService } from "./articleEvent.service";

@graphql.Resolver(() => ArticleEvent)
export class ArticleEventResolver extends ArticleEventResolverBase {
  constructor(protected readonly service: ArticleEventService) {
    super(service);
  }
}
