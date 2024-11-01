import React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import Footer from '../components/footer';
const PortfolioPage = () => {
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "A modern web application built with React and Node.js",
            category: "Web Development"
        },
        {
            id: 2,
            title: "Project Two",
            description: "Mobile-first e-commerce platform",
            category: "E-commerce"
        },
        {
            id: 3,
            title: "HR Platform",
            description: "Our HR platform is designed specifically for the government sector, offering streamlined employee management, automated workflows, and secure data handling to improve operational efficiency",
            category: "Data Visualization",
            image: "/hr-platform.png"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold sm:text-5xl mb-4">Portfolio</h1>
                        <p className="text-xl opacity-90">
                            Crafting Digital Experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* Portfolio Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
                            <CardHeader className="text-xl font-semibold" style={{ color: "black" }}>
                                {project.title}
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-2">{project.description}</p>
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image={project.image} // Provide your image URL or path here
                                sx={{ objectFit: "contain", height: "15vh", padding: 1 }} // Keeps the aspect ratio and centers the image
                            />
                        </Card>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PortfolioPage;