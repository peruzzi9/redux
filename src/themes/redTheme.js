import red from 'material-ui/colors/red';
import orange from 'material-ui/colors/orange';

export default {
    palette: {
        primary: {
            light: red[300],
            main: red[500],
            dark: red[700],
            contrastText: '#fff'
        },
        secondary: {
            light: orange[300],
            main: orange['A700'],
            dark: orange[700],
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
