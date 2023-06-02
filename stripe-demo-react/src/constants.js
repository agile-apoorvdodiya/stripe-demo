export const STRIPE = {
  PK: process.env.REACT_APP_STRIPE_PK,
  SK: process.env.REACT_APP_STRIPE_SK,
};

export const API = {
  BASE: 'http://localhost:3001/',
  PAYMENT_INTENT: 'stripe/payment-intent',
}

export const CURRENCY_LIST = [
  {
    currency: 'inr',
    symbol: '₹'
  },
  {
    currency: 'usd',
    symbol: 'US$'
  },
]