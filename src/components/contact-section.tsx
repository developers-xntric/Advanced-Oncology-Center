'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, Zap, Heart, Send } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        service: 'Oncology',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            fullName: '',
            phoneNumber: '',
            service: 'Oncology',
            message: '',
        });
    };

    const services = [
        {
            icon: Users,
            title: 'Experienced Oncology Specialists',
            description: 'Our team of expert oncologists brings years of experience.',
        },
        {
            icon: Zap,
            title: 'Advanced Technology & Precision',
            description: 'State-of-the-art equipment and precision treatment methods.',
        },
        {
            icon: Heart,
            title: 'Patient-Centered Approach',
            description: 'Your wellbeing and comfort are our top priorities.',
        },
    ];

    return (
        <section id="contact" className="py-12 md:py-20 bg-linear-to-b from-white to-teal-50">
            {/* Contact Header */}
            <div className="text-center mb-12 md:mb-16 px-4">
                <p className="text-teal-600 text-sm md:text-base font-semibold uppercase tracking-wide mb-2">
                    WE&apos;RE HERE TO SUPPORT YOU
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    You are never alone on this journey. Whether you have questions, need guidance, or want to schedule a
                    consultation, our team is ready to listen and support you with clarity, care, and expertise.
                </p>
            </div>

            {/* Contact Form and Image */}
            <div className="max-w-6xl mx-auto px-4 mb-12 md:mb-16">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 md:order-1">
                        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact-6b6JWzU7wq1VUx46ikHAt4ybUUbNoC.png"
                                alt="Doctor consulting with patient"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="order-1 md:order-2">
                        <form onSubmit={handleSubmit} className="bg-teal-600 rounded-2xl p-6 md:p-8 text-white">
                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Please enter your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Please enter your mobile"
                                    required
                                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2">Select Service *</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all appearance-none bg-white cursor-pointer"
                                >
                                    <option value="Oncology">Oncology</option>
                                    <option value="Chemotherapy">Chemotherapy</option>
                                    <option value="Radiotherapy">Radiotherapy</option>
                                    <option value="Consultation">Consultation</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Please write your message here"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
                            >
                                Get in Touch
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-teal-600 rounded-2xl p-6 md:p-8 text-white text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-teal-500 rounded-full p-3">
                                        <IconComponent size={32} />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-teal-100 text-sm md:text-base">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
