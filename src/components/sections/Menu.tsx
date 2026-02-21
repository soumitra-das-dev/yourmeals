'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Flame } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
    {
        name: 'Indian Chicken Curry',
        description: 'Genuine and delectable Indian cuisine with rice',
        price: '₹95',
        image: '', // Placeholder
        spicy: true,
        popular: true,
    },
    {
        name: 'Dal Tadka with Rice',
        description: 'Comfort dal with perfectly cooked basmati rice',
        price: '₹70',
        image: '',
        spicy: false,
        popular: false,
    },
    {
        name: 'Paneer Butter Masala',
        description: 'Creamy paneer in rich tomato gravy',
        price: '₹110',
        image: '',
        spicy: false,
        popular: true,
    },
    {
        name: 'Egg Curry with Roti',
        description: 'Spicy egg curry with 3 fresh rotis',
        price: '₹85',
        image: '',
        spicy: true,
        popular: false,
    },
]

export function Menu() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} id="menu" className="section-padding bg-linear-to-b from-white to-orange-50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Our <span className="text-gradient">Signature Meals</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Handpicked favorites loved by students and working professionals
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group overflow-hidden border-2 border-orange-100 hover:border-brand-orange hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative aspect-square overflow-hidden bg-orange-100 flex items-center justify-center">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="text-6xl">🍛</span>
                                    )}

                                    {item.popular && (
                                        <Badge className="absolute top-4 right-4 bg-brand-orange text-white border-0">
                                            Popular
                                        </Badge>
                                    )}
                                    {item.spicy && (
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                                            <Flame className="w-5 h-5 text-red-500 fill-red-500" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 grow">{item.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="font-display text-2xl font-bold text-brand-orange">{item.price}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#FC8019] text-[#FC8019] hover:bg-[#FC8019] hover:text-white font-semibold w-full sm:w-auto px-8"
                            asChild
                        >
                            <a href="https://www.swiggy.com/direct/brand/758823?source=swiggy-direct&subSource=generic" target="_blank" rel="noopener noreferrer">
                                View Menu on Swiggy
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#CB202D] text-[#CB202D] hover:bg-[#CB202D] hover:text-white font-semibold w-full sm:w-auto px-8"
                            asChild
                        >
                            <a href="https://zoma.to/r/21553448" target="_blank" rel="noopener noreferrer">
                                View Menu on Zomato
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
