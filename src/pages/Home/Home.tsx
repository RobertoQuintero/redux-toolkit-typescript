import React from 'react';
import { login } from './../../redux/slices/auth';
import { useCustomSelector, useCustomDispatch } from '../../hooks/redux/index';
import { Button, Switch } from '@mui/material';
import { setThemeMode } from '../../redux/slices/settings';
import { AppBarStyled } from './Home.styles';

export const Home: React.FC = () => {
  const { accessToken, isLoading } = useCustomSelector((state) => state.auth);
  const { themeMode } = useCustomSelector((state) => state.settings);
  const dispatch = useCustomDispatch();

  console.log(accessToken);
  const handleLogin = (): void => {
    // dispatch(setAccessToken('1233ertyooioi'));
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
    // dispatch()
  };

  const handleChangeTheme = (): void => {
    const mode = themeMode === 'dark' ? 'light' : 'dark';
    dispatch(setThemeMode(mode));
  };

  return (
    <div>
      <AppBarStyled>
        <Switch onChange={handleChangeTheme} />
      </AppBarStyled>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      {isLoading && 'IS LOADING ...'}
    </div>
  );
};
