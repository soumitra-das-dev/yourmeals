'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu as MenuIcon, X, Utensils } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Plans', href: '/#plans' },
    { name: 'Contact', href: '/#contact' },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container px-4 md:px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center overflow-hidden text-white shadow-lg group-hover:scale-110 transition-transform">
                            <Image src="/logo.png" alt="Logo" width={50} height={50} />
                        </div>
                        <span className={`text-xl font-bold font-heading tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            YOURMEALS
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <div className="flex items-center gap-3">
                            <Button className="bg-[#FC8019] hover:bg-orange-600 text-white rounded-full px-5" asChild>
                                <a href="https://www.swiggy.com/direct/brand/758823?source=swiggy-direct&subSource=generic" target="_blank" rel="noopener noreferrer">
                                    Swiggy
                                </a>
                            </Button>
                            <Button className="bg-[#CB202D] hover:bg-red-700 text-white rounded-full px-5" asChild>
                                <a href="https://zoma.to/r/21553448" target="_blank" rel="noopener noreferrer">
                                    Zomato
                                </a>
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <MenuIcon />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-display font-medium text-gray-900 hover:text-brand-orange"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-4 mt-4 w-full">
                            <Button className="bg-[#FC8019] hover:bg-orange-600 rounded-md text-white text-lg py-6 w-full" asChild>
                                <a href="https://www.swiggy.com/direct/brand/758823?source=swiggy-direct&subSource=generic" target="_blank" rel="noopener noreferrer">
                                    Swiggy
                                </a>
                            </Button>
                            <Button className="bg-[#CB202D] hover:bg-red-700 rounded-md text-white text-lg py-6 w-full" asChild>
                                <a href="https://zoma.to/r/21553448" target="_blank" rel="noopener noreferrer">
                                    Zomato
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
