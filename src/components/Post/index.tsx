import React from 'react';

import ProfileHeader from '../ProfileHeader/ProfileHeader';
import { IPost } from '@/utils/types';

const Post = ({ data }: { data: IPost }) => {
  return (
    <div>
      <ProfileHeader title={data} />
      <p>{data.postMessage.messageText}</p>
      {data.postMessage?.messageImages.map((image) => (
        <img src={image} alt='' />
      ))}
    </div>
  );
};

export default Post;
