import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2563eb', // Bright blue - good for tech
            light: '#3b82f6',
            dark: '#1d4ed8',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#0f172a', // Dark blue - good for text
            light: '#1e293b',
            dark: '#0f172a',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b',
            secondary: '#475569',
        },
        error: {
            main: '#dc2626',
            light: '#ef4444',
            dark: '#b91c1c',
        },
        warning: {
            main: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706',
        },
        info: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb',
        },
        success: {
            main: '#10b981',
            light: '#34d399',
            dark: '#059669',
        },
        grey: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
        },
        divider: 'rgba(0, 0, 0, 0.08)',
    },
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01562em',
            marginBottom: '0.5em',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.3,
            letterSpacing: '-0.00833em',
            marginBottom: '0.5em',
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
            letterSpacing: '0em',
            marginBottom: '0.5em',
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.4,
            letterSpacing: '0.00735em',
            marginBottom: '0.5em',
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.1rem',
            lineHeight: 1.5,
            letterSpacing: '0em',
            marginBottom: '0.5em',
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
            marginBottom: '0.5em',
        },
        subtitle1: {
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        button: {
            fontSize: '0.875rem',
            textTransform: 'none',
            fontWeight: 600,
        },
        caption: {
            fontSize: '0.75rem',
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontSize: '0.75rem',
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
    shadows: [
        'none',
        '0px 2px 4px rgba(0,0,0,0.05)',
        '0px 4px 6px rgba(0,0,0,0.05)',
        '0px 6px 8px rgba(0,0,0,0.05)',
        '0px 8px 12px rgba(0,0,0,0.05)',
        '0px 12px 16px rgba(0,0,0,0.05)',
        '0px 14px 20px rgba(0,0,0,0.05)',
        '0px 16px 24px rgba(0,0,0,0.05)',
        '0px 18px 28px rgba(0,0,0,0.05)',
        '0px 20px 32px rgba(0,0,0,0.05)',
        '0px 22px 36px rgba(0,0,0,0.05)',
        '0px 24px 40px rgba(0,0,0,0.05)',
        '0px 26px 44px rgba(0,0,0,0.05)',
        '0px 28px 48px rgba(0,0,0,0.05)',
        '0px 30px 52px rgba(0,0,0,0.05)',
        '0px 32px 56px rgba(0,0,0,0.05)',
        '0px 34px 60px rgba(0,0,0,0.05)',
        '0px 36px 64px rgba(0,0,0,0.05)',
        '0px 38px 68px rgba(0,0,0,0.05)',
        '0px 40px 72px rgba(0,0,0,0.05)',
        '0px 42px 76px rgba(0,0,0,0.05)',
        '0px 44px 80px rgba(0,0,0,0.05)',
        '0px 46px 84px rgba(0,0,0,0.05)',
        '0px 48px 88px rgba(0,0,0,0.05)',
        '0px 50px 92px rgba(0,0,0,0.05)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.05)',
                    },
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#1d4ed8',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0px 4px 6px rgba(0,0,0,0.05)',
                    '&:hover': {
                        boxShadow: '0px 8px 12px rgba(0,0,0,0.05)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#1e293b',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#2563eb',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
    },
});

export default theme;