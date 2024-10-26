import React from 'react';

import Avatar from '@mui/material/Avatar';

import { ProfileHeaderWrap } from './profileHeaderStyle';
import { IPost } from '@/utils/types';

type PropTypes = {
  photo?: string;
  title: IPost;
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
        <h1>{title.userName}</h1>
        <span>{String(title.postedAt)}</span>
      </div>
    </ProfileHeaderWrap>
  );
};

export default ProfileHeader;
