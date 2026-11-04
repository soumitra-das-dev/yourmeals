'use client';

import { Utensils, MessageCircle, MapPin, Mail, Phone, ArrowRight, Heart, AtSign } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from '@/components/ui/brand-icons';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-black py-20 border-t border-border/50 relative overflow-hidden"> {/* taste-skill-ignore */}
            <div className="container px-6 md:px-6 relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white overflow-hidden">
                                <Image src="/logo.png" alt="Logo" width={24} height={24} className='w-full h-full object-contain' />
                            </div>
                            <span className="text-2xl font-bold font-heading tracking-tight">YOURMEALS.IN</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Bringing the authentic taste of homemade Indian cuisine to your doorstep. Fresh, spicy, and delivered with love in Jhargram.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="https://www.instagram.com/yourmeals.in" title="Instagram" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:border-pink-500 transition-colors duration-200">
                                <InstagramIcon className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://wa.me/919064967577" title="WhatsApp" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-emerald-600 hover:border-emerald-600 transition-colors duration-200">
                                <MessageCircle className="w-5 h-5" />
                                <span className="sr-only">WhatsApp</span>
                            </Link>
                            <Link href="https://www.facebook.com/share/1GNZAucfKd/" title="Facebook" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors duration-200">
                                <FacebookIcon className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://www.threads.com/@yourmeals.in" title="Threads" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors duration-200">
                                <AtSign className="w-5 h-5" />
                                <span className="sr-only">Threads</span>
                            </Link>
                            <Link href="https://x.com/Yourmeals_in" title="X (Twitter)" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors duration-200">
                                <TwitterIcon className="w-5 h-5" />
                                <span className="sr-only">X (Twitter)</span>
                            </Link>
                            <Link href="https://www.youtube.com/@yourmealskitchen" title="YouTube" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-500 transition-colors duration-200">
                                <YoutubeIcon className="w-5 h-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="https://www.linkedin.com/company/yourmeals/" title="LinkedIn" target="_blank" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500 transition-colors duration-200">
                                <LinkedinIcon className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Menu', href: '/menu' },
                                { name: 'How to Order', href: '/#how-to-order' },
                                { name: 'Meal Plans', href: '/#plans' },
                                { name: 'About Us', href: '/#about' },
                                { name: 'Contact', href: '/#contact' },
                                { name: 'Order via WhatsApp', href: 'https://wa.me/919064967577?text=Hello%20YourMeals!%20I%20would%20like%20to%20order.', external: true },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-[opacity,margin] duration-200" />
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
                                <a href="tel:+919064967577" className="hover:text-primary transition-colors">+91 90649 67577</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                                <a href="https://wa.me/919064967577" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                                    WhatsApp: +91 90649 67577
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>yourmealskitchen@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"> {/* taste-skill-ignore */}
                    <p>&copy; {new Date().getFullYear()} YOURMEALS.IN. All rights reserved.</p>
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
