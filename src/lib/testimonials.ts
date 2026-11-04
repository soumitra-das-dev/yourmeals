import { client } from "@/sanity/client";

export interface TestimonialItem {
    _id: string;
    name: string;
    review: string;
    platform: string;
    image?: unknown;
}

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
    {
        _id: 'dummy-test-6',
        name: 'Ritu Sen',
        review:
            'Healthy rotis, seasonal sabzi, and yellow dal that taste just like home. Perfect for anyone who cannot cook every day.',
        platform: 'Instagram',
    },
];

export async function getTestimonials(): Promise<TestimonialItem[]> {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const testimonials = await client.fetch(`*[_type == "testimonial"] | order(_createdAt asc)`);
            if (testimonials && testimonials.length > 0) {
                return testimonials;
            }
        }
    } catch (error) {
        console.warn("Notice: Fetching testimonials from Sanity fell back to default data:", error);
    }
    return DUMMY_TESTIMONIALS;
}
