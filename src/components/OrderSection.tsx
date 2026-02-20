'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function OrderSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-top-left scale-110" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Ready to <span className="text-primary">Order?</span></h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Hungry? We are just a click away. fast delivery on Swiggy & Zomato, or plan your monthly mess via WhatsApp.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="https://swiggy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-5 bg-[#FC8019] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Order on Swiggy
                        </a>
                        <a
                            href="https://zomato.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-5 bg-[#CB202D] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Order on Zomato
                        </a>
                    </div>

                    <div className="mt-12 flex flex-col items-center">
                        <p className="text-muted-foreground mb-4">Looking for a monthly subscription?</p>
                        <a
                            href="https://wa.me/919876543210?text=Hi%20YourMeals!%20I'm%20interested%20in%20a%20monthly%20plan."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
