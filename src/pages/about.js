import React from 'react';
import { Card, Button, CardContent, CardHeader } from '@mui/material';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Material-like elevation */}
            <div className="bg-blue-600 text-white py-20 shadow-lg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold sm:text-5xl mb-4">About Us</h1>
                        <p className="text-xl opacity-90">
                            Transforming ideas into exceptional digital experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 -mt-10 sm:px-6 lg:px-8 space-y-6">
                {/* Mission Card */}
                <Card className="shadow-lg">
                    <CardHeader>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                            We are dedicated to pushing the boundaries of innovation while maintaining the highest standards
                            of quality and user experience. Our mission is to create solutions that not only meet but exceed
                            our clients' expectations, driving meaningful impact in the digital landscape.
                        </p>
                    </CardContent>
                </Card>

                {/* Team Section */}
                <Card className="shadow-lg">
                    <CardHeader title={"Our Team"}></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Stefanos Ioannou", role: "CEO & Founder" },
                            ].map((member, index) => (
                                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                            <p className="text-gray-600">{member.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Section */}
                <Card className="shadow-lg">
                    <CardHeader title={"Get in Touch"}></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Button variant="outline" className="flex items-center justify-start gap-3 h-12">
                                <Mail className="w-5 h-5" />
                                contact@company.com
                            </Button>

                            <Button variant="outline" className="flex items-center justify-start gap-3 h-12">
                                <Phone className="w-5 h-5" />
                                +1 (555) 123-4567
                            </Button>`

                            <Button variant="outline" className="flex items-center justify-start gap-3 h-12">
                                <MapPin className="w-5 h-5" />
                                123 Business Street, City
                            </Button>

                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" className="w-12 h-12">
                                    <Github className="w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="w-12 h-12">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Values Section */}
            <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
                        { title: "Quality", description: "Delivering excellence in every project" },
                        { title: "Integrity", description: "Building trust through transparent relationships" }
                    ].map((value, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader title={value.title}>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default AboutPage;