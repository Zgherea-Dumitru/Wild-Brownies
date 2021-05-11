import { Switch, Route } from 'react-router-dom';
import './App.css';
import InfoPlanets from './components/InfoPlanets';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' />
        <Route path='/planets/:id' component={InfoPlanets} />
      </Switch>
      <InfoPlanets />
    </div>
  );
}

export default App;
