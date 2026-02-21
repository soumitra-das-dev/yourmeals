'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';
import { Flame, Star, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { MenuItem } from '@/lib/menu';

interface MenuGridProps {
    items: MenuItem[];
    limit?: number;
    showViewAll?: boolean;
    title?: string;
    subtitle?: string;
}

export default function MenuGrid({
    items,
    limit,
    showViewAll = false,
    title = "Our Featured Menu",
    subtitle = "Freshly prepared, hot, and spicy meals delivered to your doorstep.",
}: MenuGridProps) {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [activeDietary, setActiveDietary] = useState<string>('All');

    // Filter items based on selected tags
    const filteredItems = items.filter(item => {
        const itemTags = item.tags || [];

        // Category match
        let categoryMatch = activeCategory === 'All';
        if (!categoryMatch) {
            categoryMatch = itemTags.includes(activeCategory);
        }

        // Dietary match
        let dietaryMatch = activeDietary === 'All';
        if (!dietaryMatch) {
            dietaryMatch = itemTags.includes(activeDietary);
        }

        return categoryMatch && dietaryMatch;
    });

    const visibleItems = limit ? filteredItems.slice(0, limit) : filteredItems;

    return (
        <section id="menu" className="py-12 md:py-24 bg-linear-to-b from-white to-orange-50/30">
            <div className="container px-6 md:px-6">
                <div className="text-center mb-8 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            {title.includes("Featured") ? (
                                <>Our <span className="text-gradient">Featured Menu</span></>
                            ) : title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Filters */}
                <div className="flex flex-col items-center gap-4 mb-10 w-full">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {['All', 'Snacks', 'Starter', 'Main Course'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-brand-orange text-white shadow-md' : 'bg-white border border-orange-100 text-gray-700 hover:bg-orange-50 hover:border-brand-orange/50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    {/* Dietary Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {['All', 'Veg', 'Non-Veg'].map(diet => (
                            <button
                                key={diet}
                                onClick={() => setActiveDietary(diet)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeDietary === diet
                                        ? (diet === 'Veg' ? 'bg-green-600 text-white shadow-md' : diet === 'Non-Veg' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-white shadow-md')
                                        : 'bg-white border text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {diet === 'Veg' && <span className="mr-1 inline-block w-2 h-2 rounded-full bg-green-500"></span>}
                                {diet === 'Non-Veg' && <span className="mr-1 inline-block w-2 h-2 rounded-full bg-red-500"></span>}
                                {diet}
                            </button>
                        ))}
                    </div>
                </div>

                {visibleItems.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Menu Coming Soon</h3>
                        <p className="text-gray-500">We&apos;re preparing our menu. Check back soon for delicious meals!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-16">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className="flex"
                            >
                                <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border-2 border-orange-100 hover:border-brand-orange hover:shadow-2xl transition-all duration-300 group flex flex-col w-full">
                                    <div className="relative aspect-square w-full overflow-hidden bg-orange-50 flex items-center justify-center">
                                        {item.image ? (
                                            <Image
                                                src={typeof item.image === 'string' ? item.image : (urlFor(item.image)?.url() || '')}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                unoptimized={typeof item.image === 'string'}
                                            />
                                        ) : (
                                            <div className="text-6xl group-hover:scale-110 transition-transform duration-500">🍛</div>
                                        )}

                                        {item.popular !== false && (
                                            <Badge className="absolute top-4 right-4 bg-brand-orange text-white border-0 px-3 py-1">
                                                Popular
                                            </Badge>
                                        )}

                                        {item.spicyLevel === 'High' && (
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                                                <Flame className="w-5 h-5 text-red-500 fill-red-500" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex flex-col grow">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 mb-1">{item.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 grow line-clamp-2">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-4">
                                            <span className="font-display text-2xl font-bold text-brand-orange">₹{item.price}</span>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-sm font-bold text-gray-700">4.9</span>
                                            </div>
                                        </div>

                                        {/* Per-card order buttons */}
                                        {(item.swiggyLink || item.zomatoLink) && (
                                            <div className="flex gap-2">
                                                {item.swiggyLink && (
                                                    <a
                                                        href={item.swiggyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#FC8019] hover:bg-[#e37317] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200"
                                                    >
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                        Swiggy
                                                    </a>
                                                )}
                                                {item.zomatoLink && (
                                                    <a
                                                        href={item.zomatoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#cb202d] hover:bg-[#b31c27] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200"
                                                    >
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                        Zomato
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {showViewAll && items.length > (limit || 0) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <Button
                            size="lg"
                            asChild
                            className="bg-brand-orange text-white hover:bg-orange-600 font-bold h-14 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-200 w-full sm:w-auto"
                        >
                            <Link href="/menu">View All Meals</Link>
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
