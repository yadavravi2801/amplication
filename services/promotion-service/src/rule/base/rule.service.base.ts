/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Rule, // @ts-ignore
  Coupon,
} from "@prisma/client";

export class RuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RuleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleCountArgs>
  ): Promise<number> {
    return this.prisma.rule.count(args);
  }

  async rules<T extends Prisma.RuleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleFindManyArgs>
  ): Promise<Rule[]> {
    return this.prisma.rule.findMany(args);
  }
  async rule<T extends Prisma.RuleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleFindUniqueArgs>
  ): Promise<Rule | null> {
    return this.prisma.rule.findUnique(args);
  }
  async createRule<T extends Prisma.RuleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleCreateArgs>
  ): Promise<Rule> {
    return this.prisma.rule.create<T>(args);
  }
  async updateRule<T extends Prisma.RuleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleUpdateArgs>
  ): Promise<Rule> {
    return this.prisma.rule.update<T>(args);
  }
  async deleteRule<T extends Prisma.RuleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RuleDeleteArgs>
  ): Promise<Rule> {
    return this.prisma.rule.delete(args);
  }

  async findCoupons(
    parentId: string,
    args: Prisma.CouponFindManyArgs
  ): Promise<Coupon[]> {
    return this.prisma.rule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .coupons(args);
  }
}
