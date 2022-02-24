// import styled, { css } from 'styled-components';
import { useState } from 'react';
import Detail from './routes/Detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
