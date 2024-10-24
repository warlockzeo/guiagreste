import React from 'react';

import Avatar from '@mui/material/Avatar';

import { ProfileHeaderWrap } from './profileHeaderStyle';

type PropTypes = {
  photo?: string;
  title: string;
};

const ProfileHeader = ({ photo, title }: PropTypes) => {
  return (
    <ProfileHeaderWrap>
      <Avatar
        src={photo}
        alt='User avatar'
        onClick={() => {}}
        sx={{ width: 35, height: 35 }}
      />
      <div>
        <h1>{title}</h1>
        <span>Posted at</span>
      </div>
    </ProfileHeaderWrap>
  );
};

export default ProfileHeader;
