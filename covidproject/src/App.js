import './App.css';
import Nav from './components/nav';
import Render from './components/renderData';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Presentation from './components/presentationPage';
import { AnimatePresence } from "framer-motion"
import InfoNav from './components/infoNav';

function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Presentation />
            </Route>
            <Route exact path="/today/covid/:region">
              <InfoNav />
              <div>
                <Render />
              </div>
            </Route>
          </Switch>
        </div>
      </AnimatePresence>
    </Router >
  );
}

export default App;
