import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArticleEventServiceBase } from "./base/articleEvent.service.base";

@Injectable()
export class ArticleEventService extends ArticleEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
