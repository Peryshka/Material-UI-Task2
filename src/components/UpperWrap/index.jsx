import React from 'react';
import GBImg from "../../assets/icons/united-kingdom.png";
import Avatar from '@mui/material/Avatar';
import man from '../../assets/img/man.png';
import Badge from '@mui/material/Badge';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';

const UpperWrap = () => {
  return (
    <Stack spacing={{xs: 1, sm: 2}} direction="row" useFlexGap justifyContent="space-between" padding="0 20px"
           marginBottom='40px'>
      <div className={styles.cardFirst}>
        <SearchIcon className={styles.searchIcon}/>
      </div>
      <div className={styles.card}>
        <img src={GBImg} alt="Great Britain Flag" className={styles.flag}/>
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "#f44336"
            }
          }}
          badgeContent={2}>
          <NotificationImportantIcon/>
        </Badge>
        <Avatar
          alt="Remy Sharp"
          className={styles.avatarWrap}
        >
          <img src={man} alt="man" className={styles.avatar}/>
        </Avatar>
      </div>
    </Stack>
  )
}

export default UpperWrap;


