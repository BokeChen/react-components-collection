import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import router from 'src/constants/router';
import './App.css';

interface AppProps {
  [key: string]: any;
}
const App: React.FC<AppProps> = () => {
  return (
    <Switch>
      {router.map((v) => {
        return <Route exact path={v.path} component={v.component} />;
      })}
      <Redirect to="home"></Redirect>
    </Switch>
  );
};

export default App;
