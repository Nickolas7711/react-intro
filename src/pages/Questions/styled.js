import styled from 'styled-components';

export const Questions = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60vw',
  height: '60vw',
  gap: '20px',
  textAlign: 'center',
}));

export const QuestionIneer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '400px',
  height: 'auto',
  textAlign: 'left',

  li: {
    background: 'rgba(158, 234, 239, 0.57)',
    listStyleType: 'none',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '20px',
    cursor: 'pointer',
  },

  'li:hover': {
    background: 'green',
  },
}));
