'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Utensils, Heart, Clock, Shield } from 'lucide-react'

const features = [
    {
        icon: Heart,
        title: 'Homely Taste',
        description: 'Authentic home-style cooking prepared with balanced spices and care.'
    },
    {
        icon: Shield,
        title: 'Hygienic Preparation',
        description: 'Clean kitchen, fresh ingredients, safe & sanitized food packaging.'
    },
    {
        icon: Clock,
        title: 'On-Time Delivery',
        description: 'Punctual daily delivery across Jhargram for students & offices.'
    },
    {
        icon: Utensils,
        title: 'Balanced Portions',
        description: 'Generous servings ideal for busy working professionals & students.'
    },
]

export function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} id="about" className="section-padding bg-white">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="mb-3">
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-orange">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Why <span className="text-brand-orange">YOURMEALS?</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We are a cloud kitchen based in Jhargram dedicated to serving wholesome, delicious meals. No more worrying about daily lunch or dinner — we deliver directly to your doorstep.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="p-6 rounded-2xl bg-orange-50/40 border border-orange-100 hover:border-brand-orange/40 transition-colors duration-200 flex flex-col items-start gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-orange-100/70 text-brand-orange flex items-center justify-center shrink-0">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{feature.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
