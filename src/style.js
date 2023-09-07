import { Grid, styled } from "@mui/material";

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
    height: '15%',
}));

// export const SideMenuGrid = styled(Grid)(() => ({
//     // display: 'none',
//     borderRight: '2px solid #6b6d6b42',
//     padding: '10px 0',
//     margin: '5px 0',
//     backgroundColor: 'black',
//     height: 'auto',

// }));


export const MainGrid = styled(Grid)(() => ({
    padding: '0 30px',
    backgroundColor: 'white',
    height: '65%',
}));

export const FooterGrid = styled(Grid)(() => ({
    backgroundColor: '#1976d2',
    height: '20%',
}));
