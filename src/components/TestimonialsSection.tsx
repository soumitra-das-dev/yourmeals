import { getTestimonials } from "@/lib/testimonials";
import { Testimonials } from "@/components/sections/Testimonials";

export const revalidate = 60;

export default async function TestimonialsSection() {
    const testimonials = await getTestimonials();

    return <Testimonials testimonials={testimonials} />;
}
