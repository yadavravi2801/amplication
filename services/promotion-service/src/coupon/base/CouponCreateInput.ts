/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { RuleWhereUniqueInput } from "../../rule/base/RuleWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CouponCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  couponCode!: string;

  @ApiProperty({
    required: true,
    type: () => RuleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RuleWhereUniqueInput)
  @Field(() => RuleWhereUniqueInput)
  rule!: RuleWhereUniqueInput;
}

export { CouponCreateInput as CouponCreateInput };
