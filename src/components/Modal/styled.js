import styled from 'styled-components';

export const ModalWrapp = styled('div')(() => ({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '4',
  height: '100vh',
  width: '100vw',
  background: '#0000008f',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Paper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '50%',
  height: 'auto',
  background: 'white',
  padding: '30px',
  borderRadius: '20px',

  button: {
    border: 'none',
    background: 'none',
    fontSize: '2vw',
    color: '#808080a3',

    ':hover': {
      color: 'blue',
    },
  },
}));

export const PaperContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',

  img: {
    width: '40vw',
    height: '20vw',
    borderRadius: '20px',
    boxShadow: '0 20px 16px -16px rgba(0,0,0,0.6)',
  },
}));
