/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ArticleEventService } from "../articleEvent.service";
import { ArticleEventCreateInput } from "./ArticleEventCreateInput";
import { ArticleEvent } from "./ArticleEvent";
import { ArticleEventFindManyArgs } from "./ArticleEventFindManyArgs";
import { ArticleEventWhereUniqueInput } from "./ArticleEventWhereUniqueInput";
import { ArticleEventUpdateInput } from "./ArticleEventUpdateInput";

export class ArticleEventControllerBase {
  constructor(protected readonly service: ArticleEventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ArticleEvent })
  async createArticleEvent(
    @common.Body() data: ArticleEventCreateInput
  ): Promise<ArticleEvent> {
    return await this.service.createArticleEvent({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ArticleEvent] })
  @ApiNestedQuery(ArticleEventFindManyArgs)
  async articleEvents(@common.Req() request: Request): Promise<ArticleEvent[]> {
    const args = plainToClass(ArticleEventFindManyArgs, request.query);
    return this.service.articleEvents({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ArticleEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async articleEvent(
    @common.Param() params: ArticleEventWhereUniqueInput
  ): Promise<ArticleEvent | null> {
    const result = await this.service.articleEvent({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ArticleEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateArticleEvent(
    @common.Param() params: ArticleEventWhereUniqueInput,
    @common.Body() data: ArticleEventUpdateInput
  ): Promise<ArticleEvent | null> {
    try {
      return await this.service.updateArticleEvent({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ArticleEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteArticleEvent(
    @common.Param() params: ArticleEventWhereUniqueInput
  ): Promise<ArticleEvent | null> {
    try {
      return await this.service.deleteArticleEvent({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
