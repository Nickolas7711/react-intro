import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';



export default function SideBar() {
    return (    
        <MenuList>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Прапори
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Музика
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Спорт
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Царство тварин
                </Typography>
            </MenuItem>        
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Фільми
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Їжа світу
                </Typography>
            </MenuItem>        
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Мистецтво
                </Typography>
            </MenuItem>
        </MenuList>
    );
}