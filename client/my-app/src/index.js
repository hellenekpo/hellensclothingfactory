import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as AWS from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk';


const configuration: ConfigurationOptions = {
    region: 'us-east-1',
    secretAccessKey: 'DDIFWlb51TUM8jSsyFXHngW/xpw7JoGXFQDf/bGj',
    accessKeyId: 'AKIAYTCAYPPA34S2R6TM'
}
AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
