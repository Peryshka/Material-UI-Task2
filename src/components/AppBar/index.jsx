import React from 'react';
import Box from "@mui/material/Box";
import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../../assets/icons/sort.png";
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';

// SearchAppBar
const Search = styled('div')(({theme}) => ({}));

const SearchIconWrapper = styled('div')(({theme}) => ({}));

const StyledInputBase = styled(InputBase)(({theme}) => ({}));


const MainAppBar = () => {
  return (
    <>
      <Box sx={{flexGrow: 1}} className={styles.mainWrap}>
        <Typography variant="h5" component="h5">
          Users
        </Typography>
        <Button component="label" variant="contained" startIcon={<AddIcon/>}
                className={styles.btn}>
          New User
        </Button>
      </Box>
      <Box sx={{flexGrow: 1}} className={styles.appbarWrap}>
        <AppBar className={styles.appbar}>
          <Toolbar className={styles.toolbar}>
            <Search className={styles.searchWrap}>
              <SearchIconWrapper className={styles.searchIconWrapper}>
                <SearchIcon className={styles.searchIcon}/>
              </SearchIconWrapper>
              <StyledInputBase
                className={styles.styledInputBase}
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{mr: 2}}
            >
              <img src={MenuIcon} alt="Menu Icon" className={styles.menuIcon}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default MainAppBar;

