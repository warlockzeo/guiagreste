import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Search from '@mui/icons-material/Search';
import Message from '@mui/icons-material/Message';

import logo from '../../assets/logo.svg';
import { HeaderWrap, Buttons } from './headerStyle';
import AvatarMenu from '../AvatarMenu/AvatarMenu';

import { logout } from '@/utils/JWTAuth';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderWrap>
      <Link to='/'>
        <img src={logo} className='App-logo' alt='logo' />
      </Link>
      <Buttons>
        <Search fontSize='large' />
        <Message fontSize='large' />
        <AvatarMenu onLogout={handleLogout} />
      </Buttons>
    </HeaderWrap>
  );
};

export default Header;
