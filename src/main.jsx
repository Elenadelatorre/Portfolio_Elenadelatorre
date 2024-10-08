import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const theme = extendTheme({
  fonts: {
    heading: 'Helvetica, sans-serif',
    body: 'Helvetica, sans-serif'
  }
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
