import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 70,
  [theme.breakpoints.up('sm')]: {
    height: 80,
  },
}));

export default Toolbar;
