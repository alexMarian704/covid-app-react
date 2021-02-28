// import { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Render from './components/renderData';
import useFetch from './jetchData';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const { data, loading } = useFetch();

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/today/covid">
          {loading && <div>loading....</div>}
          {!loading &&
            <div>
              {data.map((country, index) => (
                <Render country={country} key={index} />
              ))}
            </div>}
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
