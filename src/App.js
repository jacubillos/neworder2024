import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/trabaja";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Poly-Agro</title>
                <link rel="canonical" href="http://poly-agro.com" />
            </Helmet>
        <NavBar />
        <Switch>
        <Route path="/trabaja">
            <Gallery />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Banner />
          </Route>
        </Switch>      
        <Footer />
      </div>
    </Router>
  );
}

export default App;