import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { AuthContextProvider } from './Context/AuthContextProvider';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthContextProvider> 
        <ChakraProvider>
          <App />
        </ChakraProvider>
    
    </AuthContextProvider>

);
