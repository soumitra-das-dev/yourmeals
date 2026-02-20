'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/919064967577"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </motion.a>
    );
}
