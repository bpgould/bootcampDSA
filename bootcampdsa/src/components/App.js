import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import HomePage from './HomePage';
import Learn from './Learn';
import About from './About';

function App() {
  return (
    <Router>
    <div className="App">
      <TopNav />
      <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/about' component={About} />
      <Route path='/learn' component={Learn} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
