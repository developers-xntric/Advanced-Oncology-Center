'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-black">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Logo and About Section */}
                    <div className="md:col-span-4 bg-[url('/footer-lbg.png')] bg-cover bg-no-repeat">
                        <div className="mb-6">
                            <Image
                                src="/flogo.png"
                                alt="Advanced Oncology Centre"
                                width={600}
                                height={600}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-black text-sm md:text-base leading-relaxed mb-6">
                            We dedicated to providing flexible & accessible healthcare services.
                        </p>

                        {/* Contact Icons */}
                        <div className="flex gap-4">
                            <a
                                href="tel:+971123456789"
                                className="bg-teal-600 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200 inline-flex"
                                aria-label="Call us"
                            >
                                <Phone size={20} />
                            </a>
                            <a
                                href="mailto:info@advancedoncology.ae"
                                className="bg-teal-600 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200 inline-flex"
                                aria-label="Email us"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-teal-600 hover:bg-teal-500 p-3 rounded-full transition-colors duration-200 inline-flex"
                                aria-label="Find us on map"
                            >
                                <MapPin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {['Home', 'About Us', 'Imaging', 'Informed Care', 'Second Opinion', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-black hover:text-white transition-colors duration-200 text-sm md:text-base"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Services</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {['PET / CT Scan', 'Chemotherapy', 'Radiotherapy', 'Consultation'].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#"
                                        className="text-black hover:text-white transition-colors duration-200 text-sm md:text-base"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="md:col-span-4">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Location</h3>
                        <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                            <Image
                                src="/footer-map.png"
                                alt="Advanced Oncology Center location map"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* <p className="text-black text-xs md:text-sm mt-3">
                            PL-776(1163/02), Sharjah Healthcare City, Sharjah Healthcare City, Sharjah
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-teal-600"></div>

            {/* Copyright Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-black text-xs md:text-sm text-center md:text-left">
                        Copyright © {currentYear} Advanced Oncology Center. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-black hover:text-white text-xs md:text-sm transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-black hover:text-white text-xs md:text-sm transition-colors duration-200">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
