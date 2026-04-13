'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Imaging', href: '#' },
        { label: 'Informed Care', href: '#' },
        { label: 'Second Opinion', href: '#' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Advanced Oncology Centre"
                            width={80}
                            height={60}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Phone Button - Desktop */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
                            <Phone size={18} />
                            <span className="text-sm font-medium">Call Now</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg">
                            <Phone size={18} />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-200">
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
