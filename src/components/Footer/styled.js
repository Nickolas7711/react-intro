import { styled } from '@mui/material/styles';

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

export const FooterContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
}));
