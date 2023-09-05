import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';



export default function SideBar() {
    return (    
        <MenuList>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Флаги
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Музыка
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Спорт
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Царство животных
                </Typography>
            </MenuItem>        
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Фильмы
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Еда мира
                </Typography>
            </MenuItem>        
            <MenuItem>
                <Typography fontSize="1.5rem">
                    Искусство
                </Typography>
            </MenuItem>
        </MenuList>
    );
}