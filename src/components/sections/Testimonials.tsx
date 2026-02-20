'use client'

import Marquee from '@/components/ui/marquee';
import { Star, Instagram, MessageCircle, ShoppingBag } from 'lucide-react';

interface TestimonialData {
    _id: string;
    name: string;
    review: string;
    platform: string;
}

interface TestimonialsProps {
    testimonials: TestimonialData[];
}

const TestimonialCard = ({ name, review, platform }: { name: string; review: string; platform: string }) => {
    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-border/50 flex flex-col h-full w-[350px]">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-brand-orange font-bold flex items-center justify-center">
                    {name[0]}
                </div>
                <div>
                    <h4 className="font-bold text-sm">{name}</h4>
                    <span className="text-xs text-muted-foreground">{platform}</span>
                </div>
                <div className="ml-auto">
                    {platform === "Instagram" && (
                        <Instagram className="w-4 h-4 text-muted-foreground" />
                    )}
                    {platform === "WhatsApp" && (
                        <MessageCircle className="w-4 h-4 text-muted-foreground" />
                    )}
                    {platform === "Zomato" && (
                        <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                    )}
                </div>
            </div>

            <p className="text-muted-foreground text-sm italic mb-4 flex-1 line-clamp-3">&quot;{review}&quot;</p>

            <div className="flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
        </div>
    );
};

export function Testimonials({ testimonials }: TestimonialsProps) {
    // Show empty state when no testimonials
    if (!testimonials || testimonials.length === 0) {
        return (
            <section id="testimonials" className="section-padding bg-zinc-50/50 relative overflow-hidden">
                <div className="container relative z-10 px-6 md:px-6">
                    <div className="text-center mb-8">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            What Our <span className="text-gradient">Customers Say</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Real reviews from our happy community in Jhargram.
                        </p>
                    </div>
                    <div className="text-center py-16">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Reviews Coming Soon</h3>
                        <p className="text-gray-500">We&apos;re collecting feedback from our happy customers!</p>
                    </div>
                </div>
            </section>
        );
    }

    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section id="testimonials" className="section-padding bg-zinc-50/50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-6 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-gradient">Customers Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real reviews from our happy community in Jhargram.
                    </p>
                </div>

                <div className="relative flex h-[280px] md:h-[450px] lg:h-[650px] w-full flex-col items-center justify-center overflow-hidden gap-6 mask-gradient">
                    <Marquee pauseOnHover className="[--duration:25s]">
                        {firstRow.map((t, i) => (
                            <TestimonialCard key={t._id || i} name={t.name} review={t.review} platform={t.platform} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:30s] hidden md:flex">
                        {secondRow.map((t, i) => (
                            <TestimonialCard key={t._id || i} name={t.name} review={t.review} platform={t.platform} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover className="[--duration:35s] hidden lg:flex">
                        {firstRow.map((t, i) => (
                            <TestimonialCard key={t._id || i} name={t.name} review={t.review} platform={t.platform} />
                        ))}
                    </Marquee>

                    {/* Gradient Overlays */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-zinc-50/50"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-zinc-50/50"></div>
                </div>
            </div>
        </section>
    );
}
