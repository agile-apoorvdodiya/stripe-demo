import { Body, Controller, Post, Req } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { IPaymentIntentPayload } from "./dto/stripe.dto";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Stripe')
@Controller('stripe')
export class StripeController {

  constructor(private stripeService: StripeService) { }

  @Post('payment-intent')
  createPaymentIntent(@Body() params: IPaymentIntentPayload) {
    console.log('>>', params)
    return this.stripeService.createPaymentIntent(params)
  }
}
