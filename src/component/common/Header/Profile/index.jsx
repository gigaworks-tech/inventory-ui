import React from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ProfilePic from './images/defaultAvatar.png';

const profileStyles = {
  parentDiv: {
    width: '120px',
    marginLeft: '16px',
    float: 'right',
    display: 'inline-block',
  },
  imgStyle: {
    height: '48px',
    borderRadius: '50%',
    marginLeft: '12px',
    boxShadow: '1px -1px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    cursor: 'pointer',
    marginBottom: '7px',
    marginTop: '12px',
  },
  arrowDropDownStyle: {
    marginTop: '-55px',
  },
};

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div style={profileStyles.parentDiv}>
      <img
        alt="profile"
        src={ProfilePic}
        style={profileStyles.imgStyle}
      />
      <IconButton
        onClick={handleClick}
        style={profileStyles.arrowDropDownStyle}
      >
        <ArrowDropDown />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
