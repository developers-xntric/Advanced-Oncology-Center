'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Imaging', href: '#imaging' },
        { label: 'Informed Care', href: '#informed' },
        { label: 'Second Opinion', href: '#opinion' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="py-4 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-4">
                <div className="flex justify-between items-center ">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Advanced Oncology Centre"
                            width={120}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 text-sm font-medium hover:text-teal-600 transition-colors duration-200 whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Phone Button - Desktop */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium">
                            <Phone size={18} />
                            Call
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-lg transition-colors">
                            <Phone size={18} />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden pb-6 border-t border-gray-200 mt-2">
                        <div className="space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors font-medium"
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
