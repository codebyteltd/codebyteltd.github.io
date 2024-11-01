import React from 'react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer.js';
import { useParams } from 'react-router-dom';
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardHeader
} from '@mui/material';

import Footer from '../components/footer.js';
import FeatureCard from '../components/feature.js';


const Home = () => {

    const linkStyle = {
        padding: '5px 10px',
        backgroundColor: '#f0f0f0',
        textDecoration: 'none',
        color: 'black',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s'
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#d0d0d0';
        e.target.style.color = 'white';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = '#f0f0f0';
        e.target.style.color = 'black';
    };


    return (
        <>
            <HeroSection />
            <LandingPage />
            <Footer />
        </>
    );

};
export const projects = [
    {
        id: 1,
        title: "The Lives of the Saints",
        description: "An anthology chronicles the remarkable stories of men and women who have lived their lives in devout service to God, embodying the teachings and principles of the Orthodox faith.",
        image: "/images/saints/saints.png",
        link: "https://play.google.com/store/apps/details?id=com.spentertainment.saints"
    },
    {
        id: 2,
        title: "Tedu Educational Platform",
        description: "Tedu is a modern web application built with React and Node.js, designed to help students and teachers manage their academic schedules, assignments, and grades.",
        image: "/images/tedu/tedu.png",
        link: "https://tedu.us/"
    },
    {
        id: 3,
        title: "HR Platform",
        description: "Our HR platform is designed specifically for the government sector, specializing in gathering hundreds of applications from job seekers and managing the recruitment process.",
        category: "Data Visualization",
        image: "images/rms/hr-platform.png",
        link: "https://careers.ee.cy/"
    }
];

const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const HeroSection = () => {
    return (

        <Container
            maxWidth="md"
            sx={{ position: "relative", textAlign: "center", zIndex: 1, pt: 10 }}
        >
            <Box sx={{ textAlign: "center", my: 4, }}>
                <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
                    Designing Seamless Platforms & Applications
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }}>
                    Empowering growth with scalable, high-performance digital solutions.
                </Typography>

                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={scrollToProjects}
                        >
                            View our Projects
                        </Button>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
};



const LandingPage = () => {
    return (
        <Box>
            {/* Features Section */}
            <Container sx={{ py: 8 }}>
                <Box sx={{ my: 6 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
                        Innovative Solutions for Your Business
                    </Typography>
                    {/* You can add other content here or additional sections as needed */}
                </Box>
                <Grid container spacing={4}>
                    {[
                        {
                            title: "Custom Web/Mobile Development",
                            description:
                                "We build custom web and mobile apps using the PERN stack (PostgreSQL, Express, React, Node.js) to deliver scalable, high-performance solutions tailored to your business needs. ",
                            image: "/images/misc/react-node.png"
                        },
                        {
                            title: "Digital Transformation by Odoo",
                            description:
                                "We specialize in Odoo development, creating custom modules tailored to streamline business processes and enhance productivity. ",
                            image: "/images/odoo/odoo17.jpg"

                        },
                        {
                            title: "Professional Penetration Testing (OSCP Certified)",
                            description:
                                "We help companies proactively secure their digital environments and stay ahead of evolving threats.",
                            image: "/images/oscp/oscp.png",
                            link: "https://www.credential.net/3d7c37c6-423c-4d1a-917b-8d9bd95b17ae"
                        },
                    ].map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>

                            <FeatureCard feature={feature} />

                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Features Section */}
            <Container sx={{ py: 5, paddingBottom: 10 }}>
                <Box sx={{ my: 2 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
                        Projects
                    </Typography>
                    {/* You can add other content here or additional sections as needed */}
                </Box>
                <Grid container id="projects" spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>

                            <FeatureCard feature={project} />

                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>
    );
};




export default Home;