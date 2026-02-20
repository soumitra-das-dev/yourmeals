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
    ctaText1 = 'View Menu on Website',
    ctaLink1 = '#menu',
    ctaText2 = 'Order on WhatsApp',
    ctaLink2 = 'https://wa.me/919064967577',
}: HeroProps) {
    const isExternalLink1 = ctaLink1.startsWith('http');
    const isExternalLink2 = ctaLink2.startsWith('http');

    return (
        <section className="relative min-h-auto lg:min-h-dvh flex items-center justify-center overflow-hidden bg-white/50 pt-24 pb-12 lg:pb-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand-orange/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container px-6 md:px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange font-semibold rounded-full text-xs md:text-sm mb-4">
                            🔥 Spicy & Homely
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight"
                    >
                        <span className="relative inline-block text-brand-orange-light">
                            <span className="relative z-10">Homely</span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none"
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
                            Delivered.

                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0"
                    >
                        Fresh, delicious Indian cuisine for working professionals & students.
                        Order via <span className="font-semibold text-brand-orange">Swiggy</span>, <span className="font-semibold text-brand-orange">Zomato</span>, or check our menu below.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                    >
                        <Button
                            size="lg"
                            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-lg h-12 px-8 w-full sm:w-auto"
                            asChild
                        >
                            <a
                                href={ctaLink1}
                                {...(isExternalLink1 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                {ctaText1}
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold text-lg h-12 px-8 w-full sm:w-auto"
                            asChild
                        >
                            <a
                                href={ctaLink2}
                                {...(isExternalLink2 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                {ctaText2}
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center lg:justify-start"
                    >
                        <span className="text-gray-600 text-sm md:text-base">WhatsApp for monthly plans</span>
                    </motion.div>
                </motion.div>

                {/* Right image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center items-center"
                >
                    <motion.div
                        animate={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-full lg:max-w-lg aspect-square"
                    >
                        <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl opacity-50" />
                        <div className="aspect-square absolute inset-4 bg-orange-100/50 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Delicious Chicken Curry"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
