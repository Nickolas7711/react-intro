import styled from 'styled-components';

export const QuizzCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  border: 'solid 2px #1976d2 ',
  borderRadius: '20px',
  padding: ' 1vw 3vw',
  width: '60vw',

  h1: {
    fontSize: '5vw',
    fontFamily: 'Dela Gothic One, cursive',
    color: '#1976d2',
    textShadow: '5px 2px 4px gray',
  },

  button: {
    border: 'solid 2px #1976d2',
    borderRadius: '10px',
  },

  'button:hover': {
    background: '#1976d2',
    color: 'white',
  },
}));
