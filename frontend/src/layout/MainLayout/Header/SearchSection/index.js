// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { IconSearch } from '@tabler/icons';
import { shouldForwardProp } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchJob } from 'store/thunk/dashboardThunk';


const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
  width: 434,
  marginLeft: 16,
  paddingLeft: 16,
  paddingRight: 16,
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important'
  },
  [theme.breakpoints.down('lg')]: {
    width: 250
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 4,
    background: '#fff'
  }
}));

const MobileSearch = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [search, setSearch] = useState('');

  const debouncedSearch = debounce((value) => {
    dispatch(getSearchJob({ role: value }));
  }, 1000);


  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    if (!search) {
      dispatch(getSearchJob({ role: '' })); // Reset search if input is empty
    }
  }, [search]);

  return (
    <OutlineInputStyle
      id="input-search-header"
      value={search}
      onChange={handleSearch}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{ 'aria-label': 'weight' }}
    />
  );
};

export default MobileSearch;
