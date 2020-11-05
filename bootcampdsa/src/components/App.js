import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import HomePage from './HomePage';
import Learn from './Learn';

function App() {
  return (
    <Router>
    <div className="App">
      <TopNav />
      <Route path='/' component={HomePage} />
      <Route path='/learn' component={Learn} />
    </div>
    </Router>
  );
}

export default App;
