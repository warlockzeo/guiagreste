import React from 'react';

import Search from '@mui/icons-material/Search';
import Message from '@mui/icons-material/Message';
import Login from '@mui/icons-material/Login';

import logo from '../../assets/logo.svg';
import { HeaderWrap, Buttons } from './headerStyle';
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLogged, setIsLogged] = React.useState<Boolean>(false);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

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
