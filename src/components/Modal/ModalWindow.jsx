import React from "react";
import { ModalWrapp, Paper, PaperContent } from "./styled";




export default function ModalWindow({ content, onClose }) {
    const handleCloseClick = () => {
        onClose();
      };
    return (
        <ModalWrapp>
            
            <Paper>
                <button onClick={handleCloseClick}>Х</button>
                <PaperContent>
                <img src={content.img} alt={content.name} />
                {content.description}
                </PaperContent>
                
            </Paper>
            
        </ModalWrapp>
    );
};