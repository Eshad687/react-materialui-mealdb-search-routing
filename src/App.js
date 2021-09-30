

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Restaurant from './components/Restaurant/Restaurant';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './NotFound/NotFound';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetail></MealDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>



        </Switch>
      </Router>


    </div>
  );
}

export default App;
