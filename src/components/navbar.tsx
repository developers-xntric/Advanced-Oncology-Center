'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import Contact from './icons/contact';

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
        <nav className="fixed w-full z-50 py-4 px-4 sm:px-6">
            <div className="max-w-[1440px] w-[90%] mx-auto bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Advanced Oncology Centre"
                            width={600}
                            height={600}
                            className="h-11 w-50 md:w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 justify-center">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-[#434B4D] text-[15px] font-medium hover:text-teal-600 transition-colors duration-200 whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Phone Button - Desktop */}
                        <div className="hidden md:flex items-center ml-4">
                            <button className="bg-[url('/cbg.png')] cursor-pointer bg-cover bg-no-repeat text-white px-4 py-4 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium">
                                <Contact />
                            </button>
                        </div>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-[#434B4D] hover:bg-gray-100 rounded-lg transition-colors"
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
                                    className="block px-4 py-2.5 rounded-lg text-[#434B4D] hover:bg-teal-50 hover:text-teal-600 transition-colors font-medium"
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
