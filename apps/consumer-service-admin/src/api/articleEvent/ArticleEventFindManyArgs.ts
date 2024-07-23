import { ArticleEventWhereInput } from "./ArticleEventWhereInput";
import { ArticleEventOrderByInput } from "./ArticleEventOrderByInput";

export type ArticleEventFindManyArgs = {
  where?: ArticleEventWhereInput;
  orderBy?: Array<ArticleEventOrderByInput>;
  skip?: number;
  take?: number;
};
