import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,

} from '@mui/material';
import { Link } from 'react-router-dom';


const linkStyle = {
    padding: '5px 10px',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s'
};


const BlogPost = ({ title, imageUrl, content, link }) => {
    return (
        <Link to={link} style={linkStyle}>
            <Card>
                <CardHeader
                    title={title}
                />
                {/* <CardMedia
                    component="img"
                    height="1px"
                    image={imageUrl}
                    alt={title}
                    sx={{ objectFit: "contain", height: "10vh" }} // Keeps the aspect ratio and centers the image

                /> */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Link>
    );
};

export default BlogPost;