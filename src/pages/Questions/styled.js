import styled from 'styled-components';

export const QuestionIneer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  height: 'auto',
  textAlign: 'left',

  li: {
    background: 'rgba(158, 234, 239, 0.57)',
    listStyleType: 'none',
    padding: '15px',
    borderRadius: '20px',
    fontSize: '25px',
    cursor: 'pointer',
  },

  'li:hover': {
    background: 'green',
    color: 'white',
  },
}));

export const QuestImages = styled('div')(() => ({
  img: {
    width: '50vw',
    height: '30vw',
    borderRadius: '20px',
    boxShadow: '0 20px 16px -16px rgba(0,0,0,0.6)',
  },

}));

export const Questions = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60vw',
  height: 'auto',
  gap: '20px',
  textAlign: 'center',
  padding: '20px',
}));
