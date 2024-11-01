import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const FeatureCard = ({ feature }) => {
    const cardContent = (
        <>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {feature.description}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={feature.image}
                alt={feature.title}
                sx={{
                    objectFit: "contain",
                    height: "15vh",
                    padding: 1
                }}
            />
        </>
    );

    // If there's a link, wrap the card in a Link component
    if (feature.link) {
        return (
            <Link
                to={feature.link}
                style={{
                    textDecoration: 'none',
                    display: 'block',
                    height: '100%'
                }}
            >
                <Card
                    sx={{
                        height: "100%",
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 4,
                            cursor: 'pointer'
                        }
                    }}
                >
                    {cardContent}
                </Card>
            </Link>
        );
    }

    // If there's no link, return the card without wrapping it
    return (
        <Card sx={{ height: "100%" }}>
            {cardContent}
        </Card>
    );
};

export default FeatureCard;