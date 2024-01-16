import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GloabStyle } from './styles/global_styles';
import { Globalprovider } from './context/globalreach';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GloabStyle />
    <Globalprovider>
      <App/>
    </Globalprovider>
  </React.StrictMode>
);

