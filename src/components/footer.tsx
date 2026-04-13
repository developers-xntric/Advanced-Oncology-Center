'use client';

import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-black -mt-6" style={{
            borderRadius: "30px 30px 0 0"
        }}>
            {/* Main Footer Content */}
            <div className="2xl:max-w-360 md:w-[90%] mx-auto px-4 sm:px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Logo and About Section */}
                    <div className="md:col-span-4 p-3 bg-[url('/footer-lbg.png')] bg-center bg-cover bg-no-repeat rounded-xl">
                        <div className="mb-4">
                            <Image
                                src="/footer-logo.png"
                                alt="Advanced Oncology Centre"
                                width={600}
                                height={600}
                                className="h-16 w-[90%] object-contain"
                            />
                        </div>
                        <p className="text-white text-sm md:text-base leading-relaxed opacity-80">
                            We dedicated to providing flexible & accessible healthcare services.
                        </p>
                        <div className='border-t-2 border-white my-4'></div>

                        {/* Contact Icons */}
                        <div className="flex justify-center gap-4">
                            <a
                                href="tel:+971042228890"
                                className="bg-[rgba(249,249,249,0.20)] hover:bg-teal-500 p-4 rounded-xl transition-colors duration-200 inline-flex"
                                aria-label="Call us"
                            >
                                <svg width="25" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.6504 28.3013C23.3748 28.3013 20.1384 27.5875 16.9415 26.1598C13.7445 24.7322 10.8357 22.7076 8.21523 20.086C5.59474 17.4645 3.57068 14.5558 2.14303 11.3598C0.715393 8.16387 0.0010482 4.92757 0 1.65091C0 1.17922 0.157229 0.786146 0.471688 0.471688C0.786146 0.157229 1.17922 0 1.65091 0H8.01869C8.38556 0 8.71312 0.124735 9.00138 0.374206C9.28963 0.623676 9.45996 0.918219 9.51237 1.25783L10.5344 6.76086C10.5868 7.18014 10.5737 7.5339 10.4951 7.82216C10.4164 8.11041 10.2723 8.35936 10.0627 8.569L6.24986 12.4211C6.77396 13.3907 7.39606 14.3273 8.11617 15.2308C8.83628 16.1343 9.62925 17.0059 10.4951 17.8455C11.3074 18.6579 12.1591 19.4115 13.05 20.1065C13.941 20.8014 14.8844 21.4366 15.8802 22.0121L19.575 18.3172C19.8109 18.0814 20.1191 17.9047 20.4996 17.7873C20.88 17.67 21.2532 17.6369 21.619 17.6883L27.0434 18.7889C27.4103 18.8937 27.7117 19.084 27.9475 19.3596C28.1833 19.6353 28.3013 19.943 28.3013 20.2826V26.6504C28.3013 27.1221 28.144 27.5151 27.8296 27.8296C27.5151 28.144 27.1221 28.3013 26.6504 28.3013Z" fill="white" />
                                </svg>

                            </a>
                            <a
                                href="mailto:admin@advancedoncology.ae"
                                className="bg-[rgba(249,249,249,0.20)] hover:bg-teal-500 p-4 rounded-xl transition-colors duration-200 inline-flex"
                                aria-label="Email us"
                            >
                                <svg width="25" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.0479 0H3.00532C1.35239 0 0 1.35239 0 3.00532V21.0373C0 22.6902 1.35239 24.0426 3.00532 24.0426H27.0479C28.7008 24.0426 30.0532 22.6902 30.0532 21.0373V3.00532C30.0532 1.35239 28.7008 0 27.0479 0ZM26.4468 6.38631L16.6194 12.5322C15.6427 13.1483 14.4105 13.1483 13.4338 12.5322L3.60639 6.38631C3.45571 6.30173 3.32376 6.18745 3.21853 6.0504C3.1133 5.91334 3.03697 5.75636 2.99417 5.58895C2.95136 5.42155 2.94297 5.2472 2.96949 5.07645C2.99602 4.90571 3.05692 4.74212 3.1485 4.59559C3.24008 4.44906 3.36044 4.32264 3.50229 4.22397C3.64415 4.12531 3.80454 4.05645 3.97378 4.02157C4.14302 3.98669 4.31757 3.98651 4.48688 4.02104C4.65619 4.05558 4.81673 4.1241 4.95878 4.22248L15.0266 10.5186L25.0944 4.22248C25.2365 4.1241 25.397 4.05558 25.5663 4.02104C25.7357 3.98651 25.9102 3.98669 26.0794 4.02157C26.2487 4.05645 26.4091 4.12531 26.5509 4.22397C26.6928 4.32264 26.8131 4.44906 26.9047 4.59559C26.9963 4.74212 27.0572 4.90571 27.0837 5.07645C27.1103 5.2472 27.1019 5.42155 27.0591 5.58895C27.0163 5.75636 26.9399 5.91334 26.8347 6.0504C26.7295 6.18745 26.5975 6.30173 26.4468 6.38631Z" fill="white" />
                                </svg>

                            </a>
                            <a
                                href="https://maps.google.com/?cid=12469732631489381878&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&source=embed"
                                className="bg-[rgba(249,249,249,0.20)] hover:bg-teal-500 p-4 rounded-xl transition-colors duration-200 inline-flex"
                                aria-label="Find us on map"
                            >
                                <svg width="25" height="25" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4146 0C5.57115 0 0.000146087 5.57101 0.000146087 12.4145C-0.0464083 22.4082 11.049 30.4155 11.5146 30.7569C11.7784 30.9431 12.1043 31.0518 12.4146 31.0518C12.725 31.0518 13.0509 30.9587 13.3147 30.7569C13.7802 30.4155 24.8757 22.4237 24.8291 12.4145C24.8291 5.57101 19.2581 0 12.4146 0ZM12.4146 18.6217C8.98514 18.6217 6.2074 15.844 6.2074 12.4145C6.2074 8.98499 8.98514 6.20725 12.4146 6.20725C15.8441 6.20725 18.6219 8.98499 18.6219 12.4145C18.6219 15.844 15.8441 18.6217 12.4146 18.6217Z" fill="white" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="md:col-span-2 md:block hidden">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Quick Links</h3>
                        <ul className="space-y-1 md:space-y-2">
                            {[{ name: "Home", link: "#" }, { name: "About Us", link: "#about" }, { name: "Imaging", link: "#imaging" }, { name: "Informed Care", link: "#informed" }, { name: "Second Opinion", link: "#opinion" }, { name: "Contact", link: "#contact" }].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.link}
                                        className="text-black transition-colors duration-200 text-sm md:text-base"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2 md:block hidden">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Services</h3>
                        <ul className="space-y-1 md:space-y-2">
                            {['PET / CT Scan', 'Chemotherapy', 'Radiotherapy'].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-black transition-colors duration-200 text-sm md:text-base"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-between md:hidden'>
                        {/* Quick Links */}
                        <div className="md:col-span-2">
                            <h3 className="text-lg font-bold mb-4 md:mb-6">Quick Links</h3>
                            <ul className="space-y-1 md:space-y-3">
                                {['Home', 'About Us', 'Imaging', 'Informed Care', 'Second Opinion', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#services"
                                            className="text-black transition-colors duration-200 text-sm md:text-base"
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
                            <ul className="space-y-1 md:space-y-3">
                                {['PET / CT Scan', 'Chemotherapy', 'Radiotherapy', 'Consultation'].map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#services"
                                            className="text-black transition-colors duration-200 text-sm md:text-base"
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="md:col-span-4">
                        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.84421775294!2d55.5697656!3d25.309437499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f57224798acf%3A0xad0d63c2c80585f6!2sSharjah%20Healthcare%20city!5e0!3m2!1sen!2s!4v1776080065911!5m2!1sen!2s" width="400" height="300" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
                        </div>
                        {/* <p className="text-black text-xs md:text-sm mt-3">
                            PL-776(1163/02), Sharjah Healthcare City, Sharjah Healthcare City, Sharjah
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="max-w-7xl mx-auto pb-6 md:pb-8">
                <p className="text-black text-xs md:text-sm text-center">
                    Copyright © {currentYear} Advanced Oncology Center. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
