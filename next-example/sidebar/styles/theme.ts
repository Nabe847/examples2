import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    textColorDefault: '#dadada',
    defaultColorMain: '#31866e',
    backgroundColorBase: '#2f2f2f',
  },
  styles: {
    global: {
      body: {
        color: '#dadada',
        'background-color': '#2f2f2f',
      },
    },
  },
});
