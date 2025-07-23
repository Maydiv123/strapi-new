import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    icon: Schema.Attribute.String;
    is_primary: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<['email', 'phone', 'address', 'social']>;
    value: Schema.Attribute.String;
  };
}

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

export interface SocialSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_social_links';
  info: {
    displayName: 'social-links';
  };
  attributes: {
    icon: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['linkedin', 'twitter', 'github', 'facebook', 'instagram']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-info': ContactContactInfo;
      'pricing.pricing-plan': PricingPricingPlan;
      'social.social-links': SocialSocialLinks;
    }
  }
}
