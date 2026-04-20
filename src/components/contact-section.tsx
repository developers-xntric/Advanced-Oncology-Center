'use client';

import { Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import CT from './icons/ct';
import ESO from './icons/eso';
import Heart from './icons/heart';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        service: 'Oncology',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
                setFormData({
                    fullName: '',
                    phoneNumber: '',
                    service: 'Oncology',
                    message: '',
                });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        {
            icon: ESO,
            title: 'Experienced Oncology Specialists',
            description: 'Our team of expert oncologists brings years of experience.',
        },
        {
            icon: Heart,
            title: 'Advanced Technology & Precision',
            description: 'State-of-the-art equipment and precision treatment methods.',
        },
        {
            icon: CT,
            title: 'Patient-Centered Approach',
            description: 'Your wellbeing and comfort are our top priorities.',
        },
    ];

    return (
        <section id="contact" className="py-12 md:pt-20 md:pb-28 bg-[url('/contact-bg.png')] bg-cover bg-no-repeat">
            {/* Contact Header */}
            <div className="text-center mb-12 md:mb-16 px-4">
                <p className="text-white text-sm md:text-base font-semibold uppercase tracking-wide mb-4">
                    WE&apos;RE HERE TO SUPPORT YOU
                </p>
                <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Contact Us</h2>
                <p className="text-white text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
                    You are never alone on this journey. Whether you have questions, need guidance, or want to schedule a
                    consultation, our team is ready to listen and support you with clarity, care, and expertise.
                </p>
            </div>

            {/* Contact Form and Image */}
            <div className="2xl:max-w-360 md:w-[95%] xl:w-[90%] mx-auto px-4 mb-12 md:mb-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-12 items-center">
                    {/* Image */}
                    <div className="order-1">
                        <div className="relative h-64 md:h-124 lg:h-140 rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/contact.png"
                                alt="Doctor consulting with patient"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="order-1 md:order-2">
                        <form onSubmit={handleSubmit} className="bg-[rgba(255,255,255,0.20)] rounded-2xl p-6 md:p-5 lg:p-8 text-white">
                            {/* Status Message */}
                            {submitStatus.type && (
                                <div
                                    className={`mb-4 p-3 rounded-lg ${submitStatus.type === 'success'
                                            ? 'bg-green-500/80'
                                            : 'bg-red-500/80'
                                        }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}
                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Please enter your name"
                                    required
                                    className="w-full px-4 md:px-2 lg:px-4 py-2 md:py-1 lg:py-2 rounded-lg text-white placeholder-white border border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.20)] focus:outline-none transition-all"
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
                                    className="w-full px-4 md:px-2 lg:px-4 py-2 md:py-1 lg:py-2 rounded-lg text-white placeholder-white border border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.20)] focus:outline-none transition-all"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2">Select Service *</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 md:px-2 lg:px-4 py-2 md:py-1 lg:py-2 rounded-lg text-white focus:outline-none border border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.20)] transition-all appearance-none cursor-pointer"
                                >
                                    <option className='text-black!' value="Oncology">Oncology</option>
                                    <option className='text-black!' value="Chemotherapy">Chemotherapy</option>
                                    <option className='text-black!' value="Radiotherapy">Radiotherapy</option>
                                    <option className='text-black!' value="Consultation">Consultation</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Please write your message here"
                                    rows={4}
                                    className="w-full px-4 md:px-2 lg:px-4 py-2 md:py-1 lg:py-2 rounded-lg text-white placeholder-white border border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.20)] focus:outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#004445] disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
                            >
                                {isSubmitting ? 'Sending...' : 'Get in Touch'}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="2xl:max-w-360 md:w-[95%] xl:w-[90%] mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[rgba(255,255,255,0.20)] flex items-center px-4 py-2 gap-3 rounded-xl text-white hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="bg-[rgba(255,255,255,0.20)] border border-[rgba(255,255,255,0.50)] w-14 h-12 flex items-center justify-center rounded-xl">
                                    <IconComponent />
                                </div>
                                <h3 className="text-lg md:text-xs lg:text-[17.5px] leading-tight font-medium mb-3 relative top-1">{service.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
