# Complete SEO Schema for Maydiv Website

## 🎯 Content Types to Create in Strapi

### 1. **SEO Metadata** (Collection Type)
**Purpose:** Manage SEO for all pages

**Fields to Add:**
```
📝 Basic SEO
- page_title (Text, required, 30-60 chars)
- meta_description (Long text, required, 120-160 chars)
- meta_keywords (Long text, max 255 chars)
- canonical_url (Text, max 255 chars)
- page_slug (UID, target: page_title)

🎨 Social Media
- og_title (Text, max 60 chars)
- og_description (Long text, max 160 chars)
- og_image (Media, single image)
- twitter_title (Text, max 60 chars)
- twitter_description (Long text, max 160 chars)
- twitter_image (Media, single image)

🏷️ Page Classification
- page_type (Enumeration, required)
  Options: homepage, about, services, portfolio, blog, contact, ai_services, app_development, web_development, marketing, ui_ux

🔍 Technical SEO
- robots_meta (Enumeration, default: "index,follow")
  Options: index,follow, noindex,follow, index,nofollow, noindex,nofollow
- priority (Number, decimal, 0-1, default: 0.5)
- changefreq (Enumeration, default: "weekly")
  Options: always, hourly, daily, weekly, monthly, yearly, never
- last_modified (DateTime)

📊 Advanced SEO
- schema_markup (JSON)
- structured_data (JSON)
- target_keywords (JSON)
- seo_score (Number, integer, 0-100)
- notes (Long text)
```

### 2. **Service** (Collection Type)
**Purpose:** Manage Maydiv's services with SEO

**Fields to Add:**
```
📝 Basic Info
- title (Text, required, max 100 chars)
- slug (UID, target: title, required)
- description (Rich text, required)
- short_description (Long text, max 200 chars)
- service_category (Enumeration, required)
  Options: ai_services, app_development, web_development, marketing, ui_ux_design, consulting

🖼️ Media
- icon (Media, single image)
- featured_image (Media, single image)
- gallery (Media, multiple images)

💰 Pricing
- pricing_plans (Component, repeatable)
  - plan_name (Text, required)
  - price (Number, decimal)
  - currency (Enumeration: USD, EUR, GBP, INR)
  - billing_period (Enumeration: one_time, monthly, quarterly, yearly)
  - features (JSON)
  - is_popular (Boolean, default: false)

🔗 Relations
- seo (Relation, one-to-one, target: SEO Metadata)
- testimonials (Relation, many-to-many, target: Testimonial)
- portfolio_items (Relation, many-to-many, target: Portfolio)

📊 Additional
- features (JSON)
- technologies (JSON)
- is_featured (Boolean, default: false)
- order (Number, integer, default: 0)
```

### 3. **Portfolio** (Collection Type)
**Purpose:** Showcase Maydiv's work

**Fields to Add:**
```
📝 Basic Info
- title (Text, required, max 100 chars)
- slug (UID, target: title, required)
- description (Rich text, required)
- short_description (Long text, max 200 chars)
- client_name (Text, max 100 chars)
- project_url (Text, max 255 chars)

🖼️ Media
- featured_image (Media, single image, required)
- gallery (Media, multiple images)
- before_after_images (Media, multiple images)

📊 Project Details
- project_type (Enumeration, required)
  Options: web_development, app_development, ai_services, ui_ux_design, marketing
- technologies_used (JSON)
- project_duration (Text, max 50 chars)
- team_size (Number, integer)
- budget_range (Text, max 50 chars)

🔗 Relations
- seo (Relation, one-to-one, target: SEO Metadata)
- services (Relation, many-to-many, target: Service)
- testimonials (Relation, many-to-many, target: Testimonial)

📈 Results
- results_summary (Long text)
- metrics (JSON)
- is_featured (Boolean, default: false)
- completion_date (Date)
```

### 4. **Testimonial** (Collection Type)
**Purpose:** Customer reviews and feedback

**Fields to Add:**
```
📝 Basic Info
- client_name (Text, required, max 100 chars)
- client_position (Text, max 100 chars)
- company_name (Text, max 100 chars)
- testimonial_text (Long text, required)
- rating (Number, integer, 1-5, required)

🖼️ Media
- client_photo (Media, single image)
- company_logo (Media, single image)

🔗 Relations
- services (Relation, many-to-many, target: Service)
- portfolio_items (Relation, many-to-many, target: Portfolio)

📊 Additional
- project_name (Text, max 100 chars)
- is_featured (Boolean, default: false)
- testimonial_date (Date)
- verified (Boolean, default: true)
```

### 5. **Blog Post** (Collection Type)
**Purpose:** Content marketing and SEO

**Fields to Add:**
```
📝 Basic Info
- title (Text, required, max 100 chars)
- slug (UID, target: title, required)
- content (Rich text, required)
- excerpt (Long text, max 300 chars)
- author (Text, max 100 chars)

🖼️ Media
- featured_image (Media, single image)
- gallery (Media, multiple images)

📊 Categories
- category (Enumeration, required)
  Options: web_development, app_development, ai_services, marketing, ui_ux, technology, business
- tags (JSON)

🔗 Relations
- seo (Relation, one-to-one, target: SEO Metadata)
- related_posts (Relation, many-to-many, target: Blog Post)

📈 Publishing
- published_at (DateTime)
- is_featured (Boolean, default: false)
- reading_time (Number, integer, minutes)
```

### 6. **Team Member** (Collection Type)
**Purpose:** About page and team showcase

**Fields to Add:**
```
📝 Basic Info
- name (Text, required, max 100 chars)
- position (Text, required, max 100 chars)
- bio (Long text)
- email (Email)
- phone (Text, max 20 chars)

🖼️ Media
- photo (Media, single image, required)
- social_links (JSON)

📊 Skills
- skills (JSON)
- experience_years (Number, integer)
- specializations (JSON)

🔗 Relations
- seo (Relation, one-to-one, target: SEO Metadata)

📈 Additional
- is_featured (Boolean, default: false)
- order (Number, integer, default: 0)
```

## 🧩 Components to Create

### 1. **Pricing Plan** (Component)
```
- plan_name (Text, required)
- price (Number, decimal, required)
- currency (Enumeration: USD, EUR, GBP, INR)
- billing_period (Enumeration: one_time, monthly, quarterly, yearly)
- features (JSON)
- is_popular (Boolean, default: false)
- description (Long text, max 200 chars)
```

### 2. **Social Links** (Component)
```
- platform (Enumeration: linkedin, twitter, github, facebook, instagram)
- url (Text, required)
- icon (Text)
```

### 3. **Contact Information** (Component)
```
- type (Enumeration: email, phone, address, social)
- value (Text, required)
- icon (Text)
- is_primary (Boolean, default: false)
```

## 🎯 SEO Best Practices Implementation

### For Each Content Type:
1. **Always create SEO Metadata** for every entry
2. **Use proper slugs** for URL-friendly links
3. **Add structured data** in schema_markup field
4. **Include target keywords** in meta fields
5. **Set proper robots meta** for each page type

### Priority Pages for SEO:
1. **Homepage** - Company overview, main services
2. **About** - Company story, team, expertise
3. **Services** - Individual service pages
4. **Portfolio** - Case studies and work examples
5. **Contact** - Contact information and forms
6. **Blog** - Content marketing articles

## 🚀 Next Steps

1. **Create these content types** in Strapi Content-Type Builder
2. **Add sample content** for each type
3. **Create SEO metadata** for all pages
4. **Test API endpoints** to ensure data is accessible
5. **Connect to your frontend** to display the content

This schema will give you a complete, SEO-optimized content management system for Maydiv! 