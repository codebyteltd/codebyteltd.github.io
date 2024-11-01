import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <img src="/logo192.png" alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
                    </Link>
                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '16px', // add spacing between buttons
                        }}
                    >
                        <Button color='black' component={Link} to="/">Home</Button>
                        <Button color='black' component={Link} to="/articles">Articles</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}