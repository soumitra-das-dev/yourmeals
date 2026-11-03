'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';
import { Flame, Star, MessageCircle, Plus, Check } from 'lucide-react';
import Image from 'next/image';
import { Button, Badge } from '@/components/ui';
import Link from 'next/link';
import { MenuItem } from '@/lib/menu';
import { useCart } from '@/context/CartContext';

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
    const [addedToast, setAddedToast] = useState<string | null>(null);

    const { addItem, items: cartItems } = useCart();

    // Filter items based on selected tags
    const filteredItems = items.filter(item => {
        const itemTags = item.tags || [];

        let categoryMatch = activeCategory === 'All';
        if (!categoryMatch) {
            categoryMatch = itemTags.includes(activeCategory);
        }

        let dietaryMatch = activeDietary === 'All';
        if (!dietaryMatch) {
            dietaryMatch = itemTags.includes(activeDietary);
        }

        return categoryMatch && dietaryMatch;
    });

    const visibleItems = limit ? filteredItems.slice(0, limit) : filteredItems;

    const handleAddToCart = (item: MenuItem) => {
        addItem({
            id: item._id,
            name: item.name,
            price: item.price,
            spicyLevel: item.spicyLevel,
            tags: item.tags,
            image: item.image,
        });
        setAddedToast(item.name);
        setTimeout(() => setAddedToast(null), 2200);
    };

    return (
        <section id="menu" className="py-12 md:py-24 bg-white relative">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center mb-8 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold text-brand-orange mb-3">
                            Fresh Daily Kitchen Batches
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                            {title.includes("Featured") ? (
                                <>Our <span className="text-brand-orange">Featured Menu</span></>
                            ) : title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Added item notification toast */}
                {addedToast && (
                    <motion.div
                        data-ui="toast"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-sm" /* taste-skill-ignore */
                    >
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Added &ldquo;{addedToast}&rdquo; to your order cart</span>
                    </motion.div>
                )}

                {/* Filters */}
                <div className="flex flex-col items-center gap-4 mb-10 w-full">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {['All', 'Snacks', 'Starter', 'Main Course'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                                    activeCategory === cat
                                        ? 'bg-brand-orange text-white'
                                        : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
                                }`}
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
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                                    activeDietary === diet
                                        ? (diet === 'Veg'
                                            ? 'bg-emerald-600 text-white'
                                            : diet === 'Non-Veg'
                                            ? 'bg-rose-600 text-white'
                                            : 'bg-gray-900 text-white')
                                        : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {diet === 'Veg' && <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-emerald-400"></span>}
                                {diet === 'Non-Veg' && <span className="mr-1.5 inline-block w-2 h-2 rounded-full bg-rose-400"></span>}
                                {diet}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid items */}
                {visibleItems.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">No items found</h3>
                        <p className="text-gray-500 text-sm">Try resetting filters to explore all available dishes.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-16">
                        {visibleItems.map((item, index) => {
                            const cartQty = cartItems.find(ci => ci.id === item._id)?.quantity || 0;
                            const isVeg = item.tags?.includes('Veg');

                            return (
                                <motion.div
                                    key={item._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06, duration: 0.4 }}
                                    className="group rounded-2xl bg-white border border-gray-200 hover:border-brand-orange/40 transition-colors duration-200 overflow-hidden flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Image Box */}
                                        <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                                            {item.image && urlFor(item.image) ? (
                                                <Image
                                                    src={urlFor(item.image)!.url()}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs font-medium text-gray-400">
                                                    Fresh Kitchen Dish
                                                </div>
                                            )}

                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                                                {isVeg ? (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 text-emerald-800 border border-emerald-200">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                                        Veg
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 text-rose-800 border border-rose-200">
                                                        <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                                                        Non-Veg
                                                    </span>
                                                )}
                                                {item.popular && (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-orange text-white">
                                                        <Star className="w-3 h-3 fill-current" /> Popular
                                                    </span>
                                                )}
                                            </div>

                                            {item.spicyLevel && (
                                                <div className="absolute bottom-3 right-3 bg-white/95 px-2.5 py-1 rounded-md text-xs font-semibold text-gray-800 border border-gray-200 flex items-center gap-1">
                                                    <Flame className="w-3.5 h-3.5 text-brand-orange" />
                                                    <span>{item.spicyLevel}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Card content */}
                                        <div className="p-5">
                                            <div className="flex items-baseline justify-between gap-2 mb-2">
                                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-orange transition-colors truncate">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl text-brand-orange shrink-0 tabular-nums">
                                                    ₹{item.price}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                                                {item.description || "Prepared with fresh local ingredients and authentic spices."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons: Add to Cart & WhatsApp Direct */}
                                    <div className="p-5 pt-0 flex items-center gap-2">
                                        <Button
                                            onClick={() => handleAddToCart(item)}
                                            className={`flex-1 rounded-xl py-2 text-xs font-semibold transition-colors gap-1.5 active:scale-[0.98] ${
                                                cartQty > 0
                                                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                                                    : 'bg-gray-900 hover:bg-brand-orange text-white'
                                            }`}
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>{cartQty > 0 ? `Added (${cartQty})` : 'Add to Order'}</span>
                                        </Button>

                                        <Button
                                            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl p-2.5 shrink-0 transition-colors active:scale-[0.98]"
                                            asChild
                                        >
                                            <a
                                                href={`https://wa.me/919064967577?text=${encodeURIComponent(
                                                    `Hello YourMeals! I would like to order: ${item.name} (₹${item.price}). Please confirm availability.`
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Order this dish on WhatsApp"
                                                aria-label={`Order ${item.name} on WhatsApp`}
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* View All button */}
                {showViewAll && (
                    <div className="text-center">
                        <Button
                            size="lg"
                            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-full px-8 py-5 text-base transition-colors"
                            asChild
                        >
                            <Link href="/menu">
                                View Full Kitchen Menu
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
