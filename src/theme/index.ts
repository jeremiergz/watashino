const colors = {
    dark: '#424242',
    error: '#F44336',
    info: '#2196F3',
    primary: '#17365C',
    secondary: '#31859A',
    success: '#4CAF50',
    text: '#262626',
};

const fonts = {
    main: {
        family: "'Open Sans', sans-serif",
        weight: {
            bold: 800,
            regular: 400,
            semiBold: 600,
        },
    },
};

const sizes = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptopS: 1024,
    laptopM: 1200,
    laptopL: 1440,
    desktop: 2560,
};

const breakpoints = {
    maxWidth: {
        mobileS: `@media (max-width: ${sizes.mobileS - 1}px)`,
        mobileM: `@media (max-width: ${sizes.mobileM - 1}px)`,
        mobileL: `@media (max-width: ${sizes.mobileL - 1}px)`,
        tablet: `@media (max-width: ${sizes.tablet - 1}px)`,
        laptopS: `@media (max-width: ${sizes.laptopS - 1}px)`,
        laptopM: `@media (max-width: ${sizes.laptopM - 1}px)`,
        laptopL: `@media (max-width: ${sizes.laptopL - 1}px)`,
        desktop: `@media (max-width: ${sizes.desktop - 1}px)`,
        desktopL: `@media (max-width: ${sizes.desktop - 1}px)`,
    },
    minWidth: {
        mobileS: `@media (min-width: ${sizes.mobileS}px)`,
        mobileM: `@media (min-width: ${sizes.mobileM}px)`,
        mobileL: `@media (min-width: ${sizes.mobileL}px)`,
        tablet: `@media (min-width: ${sizes.tablet}px)`,
        laptopS: `@media (min-width: ${sizes.laptopS}px)`,
        laptopM: `@media (min-width: ${sizes.laptopM}px)`,
        laptopL: `@media (min-width: ${sizes.laptopL}px)`,
        desktop: `@media (min-width: ${sizes.desktop}px)`,
        desktopL: `@media (min-width: ${sizes.desktop}px)`,
    },
};

const theme = {
    breakpoints,
    colors,
    fonts,
    sizes,
};

export default theme;
