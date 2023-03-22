import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useCustomSelector } from '../hooks/redux/index';

interface Props {
  children: React.ReactNode;
}
export const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useCustomSelector((state) => state.settings);

  const isLight = themeMode === 'light';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#651fff'
      },
      mode: isLight ? 'light' : 'dark'
    }
  });

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        {/* quita los margenes y padding */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
