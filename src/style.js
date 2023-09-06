import { Grid, InputBase, alpha, styled } from "@mui/material";

export const MainWrapp = styled(Grid)(() => ({
    height: '100vh',
    width: '100vw'
}));

export const Item = styled('div')(() => ({
    padding: '0',
    textAlign: 'center',

}));

export const HeaderGrid = styled(Grid)(() => ({
    // backgroundColor: '#1976d2',
    height: '8%',
}));

export const SideBarGrid = styled(Grid)(() => ({
    // display: 'none',
    borderRight: '2px solid #6b6d6b42',
    padding: '10px 0',
    margin: '5px 0',
    backgroundColor: 'white',
    height: 'auto',

}));


export const MainGrid = styled(Grid)(() => ({
    backgroundColor: 'white',
    height: '73%',
}));

export const FooterGrid = styled(Grid)(() => ({
    backgroundColor: '#1976d2',
    height: '15%',
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
      // vertical padding + font size from searchIcon
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