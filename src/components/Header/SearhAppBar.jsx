import * as React from 'react';
import { Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './style';

export default function SearchAppBar() {
  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Toolbar>
  );
}
