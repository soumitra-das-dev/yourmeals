'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Users, Heart } from 'lucide-react';

const stats = [
    { label: "Happy Customers", value: "100+", icon: Users },
    { label: "Daily Fresh Prep", value: "100%", icon: Clock },
    { label: "Delivery Area", value: "Surendranagar", icon: MapPin },
    { label: "Made with Love", value: "Genuine Taste", icon: Heart },
];

export default function AboutSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-3xl p-8 md:p-12 relative z-10"
                >
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Genuine Flavors, <span className="text-primary">Zero Hassle</span></h2>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed">
                            YourMeals.in is a premium cloud kitchen bringing the authentic taste of home to your doorstep.
                            Whether you are a busy working professional, a student in a hostel, or just craving a
                            hearty Indian meal, we have got you covered. No preservatives, just pure flavor.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
