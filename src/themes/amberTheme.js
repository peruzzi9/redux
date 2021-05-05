import deepOrange from 'material-ui/colors/deepOrange';
import amber from 'material-ui/colors/amber';

export default {
    palette: {
        primary: {
            light: amber[300],
            main: amber[500],
            dark: amber[700],
            contrastText: '#fff'
        },
        secondary: {
            light: deepOrange[300],
            main: deepOrange['A400'],
            dark: deepOrange[700],
            contrastText: '#fff'
        }
    },
    status: {
        danger: 'orange',
    },

    typography: {
        fontFamily: "DroidKufi-Regular, Segoe UI, Segoe, Tahoma, Helvetica, Arial, sans-serif",
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
    },
};
