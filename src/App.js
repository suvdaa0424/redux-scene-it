import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FavoritesPage from './components/pages/FavoritesPage';
import SearchPage from './components/pages/SearchPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* place the component here */}
          <SearchPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
