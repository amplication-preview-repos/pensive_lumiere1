import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
