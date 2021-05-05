import pink from 'material-ui/colors/pink';
import teal from 'material-ui/colors/teal';

export default {
    palette: {
        primary: {
            light: pink[300],
            main: pink[500],
            dark: pink[700],
            contrastText: '#fff'
        },
        secondary: {
            light: teal[300],
            main: teal['A700'],
            dark: teal[700],
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
