'use client';

import { Utensils, Instagram, MessageCircle, MapPin, Mail, Phone, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-black py-20 border-t border-border/50 relative overflow-hidden">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            <div className="container px-6 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden shadow-orange-500/30">
                                <Image src="/logo.png" alt="Logo" width={24} height={24} className='w-full h-full object-contain' />
                            </div>
                            <span className="text-2xl font-bold font-heading tracking-tight">YOURMEALS.IN</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Bringing the authentic taste of homemade Indian cuisine to your doorstep. Fresh, spicy, and delivered with love in Jhargram.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/yourmeals.in" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://wa.me/919064967577" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-green-500 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <MessageCircle className="w-5 h-5" />
                                <span className="sr-only">WhatsApp</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Menu', href: '/menu' },
                                { name: 'About Us', href: '/#about' },
                                { name: 'Contact', href: '/#contact' },
                                { name: 'Order on Swiggy', href: 'https://www.swiggy.com', external: true },
                                { name: 'Order on Zomato', href: 'https://www.zomato.com', external: true },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>Near Barnali Playground, Uttar Bamda,<br />Jhargram, West Bengal 721507</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 90649 67577</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@yourmeals.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} YourMeals.in. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
                        <Link
                            href="https://www.instagram.com/soumzy.d_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-primary transition-colors"
                        >
                            Soumo
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
