import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Body = styled('body')(() => ({
  height: '100%',
}));

export const MainWrapp = styled(Grid)(() => ({
  height: '100vh',
  width: '100vw',
}));

export const HeaderGrid = styled(Grid)(() => ({
  height: '10%',
}));

export const MainGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px',
  backgroundColor: 'white',
  minHeight: '70%',
  overflow: 'auto',
  alignItems: 'center',
}));

export const Item = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '30px',
  height: 'auto',
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
