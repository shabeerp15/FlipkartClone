import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
