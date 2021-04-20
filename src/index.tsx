import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'src/constants/store';
import router from 'src/routers/Router';
import RouteLayout from 'src/routers/RouterLayout';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <StoreProvider store={store}>
        <Router>
          <RouteLayout router={router || []} />
        </Router>
      </StoreProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
