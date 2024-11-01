import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600">Interested in working together? Let's connect!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a href="mailto:stefanos@codebyte.cy" className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <Mail className="w-6 h-6 text-blue-600 mr-2" />
                        <span>Email</span>
                    </a>
                    <a href="tel:+35799113894" className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <Phone className="w-6 h-6 text-blue-600 mr-2" />
                        <span >+357 99113894</span>
                    </a>
                    <a href="https://github.com/bluemindset" className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <Github className="w-6 h-6 text-blue-600 mr-2" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/company/codebyte-cy" className="flex items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <Linkedin className="w-6 h-6 text-blue-600 mr-2" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;