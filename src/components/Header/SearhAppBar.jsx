import * as React from 'react';
import { Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import actions from '../../store/services/quizzs/actions';

export default function SearchAppBar() {
  const { filter } = useSelector((state) => state.quizzsReducer);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(actions.filterAction(e.target.value));
  };
  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={filter}
          onChange={handleChangeFilter}
        />
      </Search>
    </Toolbar>
  );
}
