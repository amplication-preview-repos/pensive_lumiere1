import { SortOrder } from "../../util/SortOrder";

export type ArticleEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
