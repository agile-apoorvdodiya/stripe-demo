import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { isNotEmpty, IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class IPaymentIntentPayload {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  method: string;
}