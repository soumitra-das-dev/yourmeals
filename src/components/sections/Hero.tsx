'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ShoppingBag, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
    ctaText1?: string;
    ctaLink1?: string;
    ctaText2?: string;
    ctaLink2?: string;
}

export function Hero({
    ctaText1 = 'Explore Menu',
    ctaLink1 = '#menu',
    ctaText2 = 'Order on WhatsApp',
    ctaLink2 = 'https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20would%20like%20to%20place%20an%20order.',
}: HeroProps) {
    const isExternalLink1 = ctaLink1.startsWith('http');
    const isExternalLink2 = ctaLink2.startsWith('http');

    return (
        <section className="relative min-h-auto lg:min-h-dvh flex items-center justify-center bg-white pt-24 pb-12 lg:pb-20">
            <div className="container px-6 md:px-8 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full mx-auto max-w-7xl">
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center lg:text-left order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center"
                >
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-sm font-semibold text-gray-700">
                            Jhargram Cloud Kitchen &bull; Hot Daily Service
                        </span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-[1.08] tracking-tight">
                        <span className="relative inline-block text-brand-orange-light">
                            <span className="relative z-10">Homely</span>
                            <svg
                                className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none"
                                viewBox="1 5 100 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M 5 15 Q 40 5, 95 12"
                                    stroke="#FFB020"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="circle-path"
                                />
                            </svg>
                        </span>{" "}
                        Meals,
                        <br />
                        <span className="text-brand-orange">
                            Delivered Hot.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Freshly cooked home-style Indian cuisine for working professionals & students in Jhargram.
                        Direct kitchen orders, customized spice levels & monthly tiffin subscriptions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="bg-brand-orange hover:bg-brand-orange-dark active:scale-[0.98] text-white font-semibold text-base h-12 px-7 rounded-xl transition-colors w-full sm:w-auto"
                            asChild
                        >
                            <a
                                href={ctaLink1}
                                {...(isExternalLink1 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                {ctaText1}
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold text-base h-12 px-7 rounded-xl transition-colors w-full sm:w-auto"
                            asChild
                        >
                            <a
                                href={ctaLink2}
                                {...(isExternalLink2 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <MessageCircle className="mr-2 h-4 w-4" />
                                {ctaText2}
                            </a>
                        </Button>
                    </div>

                    {/* Quick highlights */}
                    <div className="mt-8 pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span>Direct WhatsApp Orders</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                            <span>30–45 Mins Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span>Monthly Plans</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right image: Clear, honest food presentation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center items-center"
                >
                    <div className="group relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-orange-50 border border-orange-100">
                        <Image
                            src="https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=800&auto=format&fit=crop"
                            alt="Freshly cooked Indian home meals"
                            fill
                            priority
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            sizes="(max-width: 1024px) 80vw, 400px"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/95 px-3.5 py-1.5 rounded-xl border border-orange-100 text-xs font-semibold text-gray-800 flex items-center gap-2 shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span>Cooked Fresh Daily</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
