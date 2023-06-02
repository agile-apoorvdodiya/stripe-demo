import { Injectable } from '@nestjs/common';
import { STRIPE } from 'src/constant/stripe';
import Stripe from "stripe";
import { IPaymentIntentPayload } from './dto/stripe.dto';

@Injectable()
export class StripeService {
  private stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2022-11-15'
  });

  async createPaymentIntent(params: IPaymentIntentPayload) {
    try {
      return await this.stripe.paymentIntents.create({
        currency: params.currency,
        amount: params.amount,
        payment_method_types: [params.method],
        description: "Testing stripe payments"
      });
    } catch (error) {
      console.log(error)
      throw error

    }
  }
}
