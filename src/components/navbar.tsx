'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import Contact from './icons/contact';
import Link from 'next/link';

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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false); // Close mobile menu on click
    };

    return (
        <nav className="fixed w-full z-50 py-4 ">
            <div className="max-w-360 w-[90%] mx-auto bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Image
                            src="/logo1.png"
                            alt="Advanced Oncology Centre"
                            width={600}
                            height={600}
                            className="h-11 w-50 md:w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-6 justify-center">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-[#434B4D] text-[15px] font-medium hover:text-teal-600 transition-colors duration-200 whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Phone Button - Desktop */}
                        <div className="hidden md:flex items-center ml-4">
                            <Link href="tel:+971042228890" className="bg-[#004445] cursor-pointer bg-cover bg-no-repeat text-white px-4 py-4 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium">
                                <Contact />
                            </Link>
                        </div>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center gap-3">
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
                                    onClick={(e) => {
                                        handleNavClick(e, item.href);
                                    }}
                                    className="block px-4 py-2.5 rounded-lg text-[#434B4D] hover:bg-teal-50 hover:text-teal-600 transition-colors font-medium"
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
