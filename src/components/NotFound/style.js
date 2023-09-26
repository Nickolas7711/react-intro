import styled from 'styled-components';

export const NotFoundContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

}));

export const Images = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5vw',
}));

export const Text = styled('div')(() => ({
  fontSize: '25vw',
  fontStyle: '700',
  color: 'red',
}));

export const Title = styled('div')(() => ({
  fontSize: '3vw',
  fontStyle: '700',
  textAlign: 'center',
}));
