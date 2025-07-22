import type { Schema, Struct } from '@strapi/strapi';

export interface PricingPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_plans';
  info: {
    displayName: 'pricing-plan';
  };
  attributes: {
    billing_period: Schema.Attribute.Enumeration<
      ['one_time', 'monthly', 'quarterly', 'yearly']
    >;
    currency: Schema.Attribute.Enumeration<['USD', 'EUR', 'GBP', 'INR']>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    is_popular: Schema.Attribute.Boolean;
    plan_name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pricing.pricing-plan': PricingPricingPlan;
    }
  }
}
