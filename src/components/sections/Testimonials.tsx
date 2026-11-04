'use client'

import Marquee from '@/components/ui/marquee';
import { Star, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/brand-icons';

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
    const isInstagram = platform === "Instagram";

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col h-full w-[350px]">
            <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-brand-orange font-bold text-sm flex items-center justify-center shrink-0">
                    {name ? name[0] : 'U'}
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900">{name}</h4>
                    <span className="text-xs text-gray-500">
                        {isInstagram ? 'Instagram Customer' : 'WhatsApp Order'}
                    </span>
                </div>
                <div className="ml-auto">
                    {isInstagram ? (
                        <InstagramIcon className="w-4 h-4 text-pink-500" />
                    ) : (
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                    )}
                </div>
            </div>

            <p className="text-gray-600 text-sm italic mb-4 flex-1 line-clamp-3 leading-relaxed">&ldquo;{review}&rdquo;</p>

            <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
        </div>
    );
};

export function Testimonials({ testimonials }: TestimonialsProps) {
    if (!testimonials || testimonials.length === 0) {
        return (
            <section id="testimonials" className="section-padding bg-gray-50/50">
                <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold text-brand-orange mb-3">
                            Jhargram Dining Community
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                            What Our <span className="text-brand-orange">Customers Say</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Real reviews from our happy dining community in Jhargram.
                        </p>
                    </div>
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-sm">We are collecting fresh reviews from our kitchen patrons!</p>
                    </div>
                </div>
            </section>
        );
    }

    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section id="testimonials" className="section-padding bg-gray-50/50">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm font-semibold text-brand-orange mb-3">
                        Jhargram Dining Community
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        What Our <span className="text-brand-orange">Customers Say</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Authentic feedback from students and professionals enjoying daily meals across Jhargram.
                    </p>
                </div>

                <div className="relative flex h-[320px] md:h-[450px] w-full flex-col items-center justify-center overflow-hidden gap-6">
                    <Marquee pauseOnHover className="[--duration:25s]">
                        {firstRow.map((t, i) => (
                            <TestimonialCard key={t._id || i} name={t.name} review={t.review} platform={t.platform} />
                        ))}
                    </Marquee>
                    {secondRow.length > 0 && (
                        <Marquee reverse pauseOnHover className="[--duration:30s] hidden md:flex">
                            {secondRow.map((t, i) => (
                                <TestimonialCard key={t._id || i} name={t.name} review={t.review} platform={t.platform} />
                            ))}
                        </Marquee>
                    )}

                    {/* Edge fade masks */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent"></div> {/* taste-skill-ignore */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent"></div> {/* taste-skill-ignore */}
                </div>
            </div>
        </section>
    );
}
