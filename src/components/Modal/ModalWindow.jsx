import React from 'react';
import { ModalWrapp, Paper, PaperContent } from './styled';

export default function ModalWindow({
  img,
  name,
  description,
  onClose,
}) {
  const handleCloseClick = () => {
    onClose();
  };
  return (
    <ModalWrapp>
      <Paper>
        <button onClick={handleCloseClick}>Х</button>
          <PaperContent>
            <img src={img} alt={name} />
            {description}
          </PaperContent>
      </Paper>
    </ModalWrapp>
  );
}
