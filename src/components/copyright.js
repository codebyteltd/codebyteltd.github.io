import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Copyright = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                backgroundColor: '#f8f9fa',
                borderTop: '1px solid #e7e7e7',
                textAlign: 'center',
            }}
        >
            <Container>
                <Typography variant="body2" color="textSecondary">
                    © 2023 - {new Date().getFullYear()} CodeByte LTD. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Copyright;
