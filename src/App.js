import logo from './logo.svg';
import './App.css';
import Bird from './components/Bird';

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-1">
        <Bird />
      </div>
    </div>
  );
}

export default App;
