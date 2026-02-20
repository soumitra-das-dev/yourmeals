'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Utensils, Heart, Clock, Shield } from 'lucide-react'

const features = [
    {
        icon: Heart,
        title: 'Homely Taste',
        description: 'Authentic home-style cooking with love and care'
    },
    {
        icon: Shield,
        title: 'Hygienic Preparation',
        description: 'Clean kitchen, fresh ingredients, safe packaging'
    },
    {
        icon: Clock,
        title: 'On-Time Delivery',
        description: 'Quick delivery via Swiggy, Zomato & direct'
    },
    {
        icon: Utensils,
        title: 'Balanced Portions',
        description: 'Perfect servings for students & professionals'
    },
]

export function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} id="about" className="section-padding bg-white">
            <div className="container px-6 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Why <span className="text-gradient">YourMeals?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We are a cloud kitchen in Jhargram serving delicious, homely meals for busy professionals and students.
                        No more worrying about lunch or dinner we have got you covered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-4 md:p-6 rounded-2xl bg-linear-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 md:mb-4 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-brand-orange group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{feature.title}</h3>
                                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
