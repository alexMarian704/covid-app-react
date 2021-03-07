import './App.css';
import Nav from './components/nav';
import Render from './components/renderData';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Presentation from './components/presentationPage';
import { AnimatePresence } from "framer-motion"
import InfoNav from './components/infoNav';
import AboutUs from './components/aboutUS';
import Page404 from './components/404';
import Footer from './components/footer';

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
            <Route exact path="/about/us">
              <AboutUs />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </AnimatePresence>
    </Router >
  );
}

export default App;
