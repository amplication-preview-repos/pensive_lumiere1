import { ArticleEvent as TArticleEvent } from "../api/articleEvent/ArticleEvent";

export const ARTICLEEVENT_TITLE_FIELD = "id";

export const ArticleEventTitle = (record: TArticleEvent): string => {
  return record.id?.toString() || String(record.id);
};
