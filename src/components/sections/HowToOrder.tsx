'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShoppingBag, MessageCircle, ExternalLink, UtensilsCrossed } from 'lucide-react'

const steps = [
    {
        icon: ShoppingBag,
        step: '1',
        title: 'Browse Our Menu',
        description: 'Check out our freshly prepared meals above or view the full menu',
        color: 'bg-brand-orange',
    },
    {
        icon: ExternalLink,
        step: '2',
        title: 'Order via Swiggy or Zomato',
        description: 'Find us on your favourite delivery app and place your order in a few taps',
        color: 'bg-[#FC8019]',
    },
    {
        icon: MessageCircle,
        step: '3',
        title: 'Or WhatsApp Us',
        description: 'Message us directly for monthly plans, bulk orders, or custom meal preferences',
        color: 'bg-green-500',
    },
    {
        icon: UtensilsCrossed,
        step: '4',
        title: 'Enjoy Your Meal!',
        description: 'We cook fresh, pack hygienically, and deliver hot to your doorstep in Jhargram',
        color: 'bg-brand-orange-dark',
    },
]

export function HowToOrder() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} id="how-to-order" className="section-padding bg-linear-to-b from-orange-50 to-white">
            <div className="container px-6 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        How to <span className="text-gradient">Order?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Getting your homely meal is simple — pick your way
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative z-10 p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            {/* Step number */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                                {step.step}
                            </div>

                            <div className={`w-14 h-14 md:w-16 md:h-16 ${step.color}/10 rounded-2xl flex items-center justify-center mb-5 group-hover:${step.color} transition-all duration-300`}>
                                <step.icon className="w-7 h-7 md:w-8 md:h-8 text-brand-orange group-hover:text-brand-orange transition-colors" />
                            </div>

                            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-5 grow">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
