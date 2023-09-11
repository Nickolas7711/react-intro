import { Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { InputBase, alpha } from '@mui/material';

export const Html = styled('html') (() => ({
    height: '100%',
}));

export const Body = styled('body') (() => ({
    height: '100%',
}));

export const MainWrapp = styled(Grid)(() => ({
    height: '100vh',
    width: '100vw'
}));

export const HeaderGrid = styled(Grid)(() => ({
    height: '10%',
}));

export const MenuButton = styled(Button)(() => ({
    display: 'block',
    transformOrigin: '16px 11px',
    float: 'left',
    marginRight: '29px',
    outline: '0',
    border: '0',
    padding: '12px',
    background: 'none',
    cursor: 'pointer',

    span: {
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    },

    ':focus': {
        border: 'medium none rgb(111, 255, 176)',
        boxShadow: 'rgb(111, 255, 176) 0 0 2px 2px',
        outline: '0',
    },

    ':hover': {
        span: {
        '&:nth-of-type(1)': {
            width: '33px',
        },

        '&:nth-of-type(2)': {
            width: '40px',
        },

        '&:nth-of-type(3)': {
            width: '30px',
        },
        },
    },

    '&.active': {
        span: {
            '&:nth-of-type(1)': {
                transform: 'rotate(45deg) translate(10px, 10px)',
                width: '40px',
            },

            '&:nth-of-type(2)': {
                opacity: 0,
                pointerEvents: 'none',
            },

            '&:nth-of-type(3)': {
                transform: 'rotate(-45deg) translate(7px, -7px)',
                width: '40px',
            },
        },
    },
}));

export const Bar = styled('span')(() => ({
    display: 'block',
    width: '40px',
    height: '5px',
    marginBottom: '7px',
    backgroundColor: '#fff',
}));

export const Menu = styled('nav')(({ open }) => ({
    position: 'absolute',
    top: '70px',
    left: '0px',
    bottom: '0px',
    zIndex: '293',
    display: 'block',
    width: '300px',
    height: '70%',
    maxWidth: '100%',
    marginTop: '0px',
    paddingTop: '25px',
    paddingRight: '0px',
    alignItems: 'stretch',
    backgroundColor: '#1976d2',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
}));

export const MenuLink = styled('a') (() => ({
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    maxWidth: '100%',
    padding: '10px',
    paddingLeft: '16%',
    backgroundSize: '36px',
    backgroundRepeat: 'no-repeat',
    transition: 'background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    textDecoration: 'none',
    borderRadius: '30px',
    boxShadow: '0 9px rgb(255, 255, 255, 0.1)',
    color: '#fff',
    fontSize: '25px',
    lineHeight: '120%',
    fontWeight: '500',
    
    ':hover': {
        margin: '10px',
        borderRadius: '20px',
        background: 'rgb(255, 255, 255, 0.3)',    
    },

    ':active': {
        backgroundColor: '#3e8e41',
        boxShadow: '0 5px #666',
        transform: 'translateY(4px)',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
}));

export const Navbar = styled('div')(() => ({
    display: 'flex',
    position: 'fixed',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'currentcolor none medium',
    maxWidth: '100%',
    margin: '0',
    alignItems: 'center',
    background: '#1976d2 none repeat scroll 0% 0%',
    color: 'rgb(248, 248, 248)',
    minWidth: '0',
    minHeight: '0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '10px 60px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 16px',
    zIndex: '300',
}));

export const Navigation = styled('div') (() => ({
    display: 'flex',
}));

export const Logo = styled('div') (() => ({
    fontSize: '50px',
    fontFamily: 'Fantazi',
    color: '#f8f8f8',
    cursor: 'default',
}));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '50ch',
            },
        },
    },
}));

export const MainGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '30px',
    backgroundColor: 'white',
    minHeight: '100%', 
}));

export const Item = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '30px',
    height: 'auto',
    width: 'auto',
}));

export const FooterGrid = styled(Grid)(() => ({
    left: '0',
    bottom: '0',
    width: '100%',
    zIndex: '300',
    backgroundColor: '#1976d2',
    height: '20%',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 -8px 16px',
    padding: '30px',
}));

export const Avatar = styled('img')(() => ({
    width: '100px', 
    height: '100px',

}));

export const Telephone = styled('div')(() => ({
    a: {
        cursor: 'pointer', 
        textDecoration: 'none', 
        color: 'white',
    },

}));

export const FooterContent = styled('div') (() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
}));
