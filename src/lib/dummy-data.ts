import { MenuItem } from './menu';
import { PlanItem } from './plans';
import { TestimonialItem } from './testimonials';
import { HeroData } from './hero';

export interface FooterData {
  _id?: string;
  brandName?: string;
  tagline?: string;
  phone?: string;
  whatsappNumber?: string;
  email?: string;
  address?: string;
  instagramUrl?: string;
  whatsappUrl?: string;
  facebookUrl?: string;
  threadsUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  copyrightText?: string;
}

export const DUMMY_HERO: HeroData = {
  title: 'Homely Meals, Delivered Hot.',
  subtitle:
    'Freshly cooked home-style Indian cuisine for working professionals & students in Jhargram. Direct kitchen orders, customized spice levels & monthly tiffin subscriptions.',
  ctaText1: 'Explore Menu',
  ctaLink1: '#menu',
  ctaText2: 'Order on WhatsApp',
  ctaLink2:
    'https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20would%20like%20to%20place%20an%20order.',
};

export const DUMMY_MENU_ITEMS: MenuItem[] = [
  {
    _id: 'dummy-menu-1',
    name: 'Special Bengali Fish Thali',
    description:
      'Steamed rice, Katla fish kalia, seasonal vegetable curry, yellow dal, crisp papad, and chutney.',
    price: 149,
    spicyLevel: 'Medium',
    image:
      'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
    popular: true,
    tags: ['Main Course', 'Non-Veg'],
  },
  {
    _id: 'dummy-menu-2',
    name: 'Royal Homely Veg Thali',
    description:
      'Basmati rice, paneer butter masala, aloo posto, yellow dal fry, seasonal sabzi, hot rotis, and sweet.',
    price: 119,
    spicyLevel: 'Mild',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    popular: true,
    tags: ['Main Course', 'Veg'],
  },
  {
    _id: 'dummy-menu-3',
    name: 'Kolkata Style Chicken Biryani',
    description:
      'Fragrant long-grain basmati rice, tender spiced chicken leg, melt-in-mouth aloo, and boiled egg.',
    price: 169,
    spicyLevel: 'Medium',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    popular: true,
    tags: ['Main Course', 'Non-Veg'],
  },
  {
    _id: 'dummy-menu-4',
    name: 'Paneer Butter Masala',
    description:
      'Soft cottage cheese simmered in rich creamy tomato and cashew nut gravy with fragrant kasuri methi.',
    price: 139,
    spicyLevel: 'Mild',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    popular: false,
    tags: ['Main Course', 'Veg'],
  },
  {
    _id: 'dummy-menu-5',
    name: 'Crispy Chicken Pakora (6 pcs)',
    description:
      'Boneless chicken marinated with crushed green chilies, ginger-garlic, and spices, fried to a golden crunch.',
    price: 99,
    spicyLevel: 'High',
    image:
      'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop',
    popular: true,
    tags: ['Starter', 'Non-Veg', 'Snacks'],
  },
  {
    _id: 'dummy-menu-6',
    name: 'Crispy Veg Spring Rolls (4 pcs)',
    description:
      'Crispy golden rolls packed with sauteed julienne vegetables and mild spices served with house dip.',
    price: 79,
    spicyLevel: 'Mild',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    popular: false,
    tags: ['Snacks', 'Starter', 'Veg'],
  },
  {
    _id: 'dummy-menu-7',
    name: 'Desi Chicken Curry & Rice',
    description:
      'Traditional homestyle chicken curry cooked with potatoes in rich onion gravy served with warm steamed rice.',
    price: 159,
    spicyLevel: 'Medium',
    image:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    popular: true,
    tags: ['Main Course', 'Non-Veg'],
  },
  {
    _id: 'dummy-menu-8',
    name: 'Classic Egg Curry Meal',
    description:
      'Two farm-fresh eggs cooked in thick onion-tomato gravy, served with 4 whole-wheat rotis or steamed rice.',
    price: 99,
    spicyLevel: 'Medium',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b3015f240a?q=80&w=800&auto=format&fit=crop',
    popular: false,
    tags: ['Main Course', 'Non-Veg'],
  },
];

export const DUMMY_PLANS: PlanItem[] = [
  {
    _id: 'dummy-plan-1',
    title: 'Student Tiffin Mess',
    subtitle: 'For Hostellers & Day Scholars in Jhargram',
    price: '₹1,899/month',
    features: [
      'Lunch or dinner daily (30 days)',
      'Balanced home-style nutrition',
      'Choice of Veg or Non-Veg on select days',
      'Weekend special menu included',
      'Pause plan up to 4 days anytime',
    ],
    highlight: false,
    ctaText: 'Subscribe via WhatsApp',
    ctaLink:
      'https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20am%20interested%20in%20the%20Student%20Tiffin%20Mess%20plan%20(%E2%82%B91%2C899%2Fmonth).',
  },
  {
    _id: 'dummy-plan-2',
    title: 'Executive Daily Mess',
    subtitle: 'For Working Professionals & Offices',
    price: '₹3,499/month',
    features: [
      'Both lunch & dinner delivery',
      'Customizable low-oil & mild spice',
      'Daily rotating 7-day curated menu',
      'Priority doorstep delivery across Jhargram',
      'Pause or rollover unconsumed meals easily',
    ],
    highlight: true,
    ctaText: 'Subscribe via WhatsApp',
    ctaLink:
      'https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20am%20interested%20in%20the%20Executive%20Daily%20Mess%20plan%20(%E2%82%B93%2C499%2Fmonth).',
  },
  {
    _id: 'dummy-plan-3',
    title: 'Custom Family Mess',
    subtitle: 'For Households & Shared Flats',
    price: 'Custom Pricing',
    features: [
      'Custom portion sizes for 3+ people',
      'Special regional Bengali & North Indian curries',
      'Weekly Sunday feast inclusion',
      'Flexible delivery timings',
      'Dedicated kitchen coordinator on WhatsApp',
    ],
    highlight: false,
    ctaText: 'Enquire via WhatsApp',
    ctaLink:
      'https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20am%20interested%20in%20a%20Custom%20Family%20Mess%20plan.',
  },
];

export const DUMMY_TESTIMONIALS: TestimonialItem[] = [
  {
    _id: 'dummy-test-1',
    name: 'Anirban Ghosh',
    review:
      'The fish curry and dal reminded me of home. As a student living away from home in Jhargram, this has been an absolute lifesaver. Timely and fresh!',
    platform: 'WhatsApp',
  },
  {
    _id: 'dummy-test-2',
    name: 'Priya Mukherjee',
    review:
      'Clean packaging, balanced spices, and zero excess oil. Our entire office staff orders lunch from YourMeals regularly.',
    platform: 'Instagram',
  },
  {
    _id: 'dummy-test-3',
    name: 'Debasis Roy',
    review:
      'The monthly mess plan is so convenient. They even let me pause my subscription when I had to travel home for a week.',
    platform: 'WhatsApp',
  },
  {
    _id: 'dummy-test-4',
    name: 'Sneha Chatterjee',
    review:
      'Hands down the best Kolkata-style biryani in Jhargram. The chicken is tender and flavorful without feeling greasy.',
    platform: 'Instagram',
  },
  {
    _id: 'dummy-test-5',
    name: 'Subhasis Mondal',
    review:
      'Ordering through WhatsApp takes 10 seconds. Food arrives hot in 35 minutes. Top quality service and delicious food.',
    platform: 'WhatsApp',
  },
];

export const DUMMY_FOOTER: FooterData = {
  brandName: 'YOURMEALSKITCHEN.COM',
  tagline:
    'Bringing the authentic taste of homemade Indian cuisine to your doorstep. Fresh, spicy, and delivered with love in Jhargram.',
  phone: '+91 90649 67577',
  whatsappNumber: '+91 90649 67577',
  email: 'hello@yourmealskitchen.com',
  address: 'Near Barnali Playground, Uttar Bamda, Jhargram, West Bengal 721507',
  instagramUrl: 'https://www.instagram.com/yourmeals.in',
  whatsappUrl: 'https://wa.me/919064967577',
  facebookUrl: 'https://www.facebook.com/share/1GNZAucfKd/',
  threadsUrl: 'https://www.threads.com/@yourmeals.in',
  twitterUrl: 'https://x.com/Yourmeals_in',
  youtubeUrl: 'https://www.youtube.com/@yourmealskitchen',
  linkedinUrl: 'https://www.linkedin.com/company/yourmeals/',
  copyrightText: 'YOURMEALSKITCHEN.COM',
};
