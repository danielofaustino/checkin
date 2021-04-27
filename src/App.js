import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkin from './components/Checkin';
import Header from './components/Header';
import Attestation from './components/Attestation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Checkin} />
          <Route exact path="/atestado" component={Attestation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
