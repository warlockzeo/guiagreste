import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import ProfileHeader from '../ProfileHeader/ProfileHeader';
import { IPost } from '@/utils/types';
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';

const Post = ({ data }: { data: IPost }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='mb-3'>
      <IconButton
        className='!absolute !right-2'
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => {}}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={() => {}}>Logout</MenuItem>
      </Menu>

      <ProfileHeader title={data} />
      <p>{data.postMessage.messageText}</p>
      <img
        className='mt-2 mb-2'
        src={
          'https://pixpine.com/wp-content/uploads/2024/05/Free-and-Best-Stationery-Mockup-1.jpg'
        }
        alt=''
      />
      {data.postMessage?.messageImages.map((image) => (
        <img src={image} alt='' className='mt-2 mb-2' />
      ))}
    </div>
  );
};

export default Post;
