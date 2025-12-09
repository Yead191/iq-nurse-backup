import { footerLinks } from '@/data/footerData';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#020b1f] text-white pt-20 pb-8 border-t border-[#1e293b]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold text-[#33dfe5] mb-6 inline-block"
                        >
                            IQ-Nurse
                        </Link>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering the next generation of nurses with cutting-edge AI
                            technology. Your success is our mission.
                        </p>
                    </div>

                    {/* Dynamic Footer Sections */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-[#33dfe5] font-semibold mb-6">
                                {section.title}
                            </h4>

                            <ul className="space-y-4 text-gray-400">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1e293b] text-center text-gray-500 text-sm">
                    <p>
                        &copy; 2025 IQ-Nurse. All rights reserved. Empowering nursing
                        students worldwide.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
