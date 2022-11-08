import './App.css';
import Page from './components/Page'
import logo from './react.png'

function App() {
  return (
    <div className="App">
      <img src={logo} alt='react' width='40px'/>
      <Page />
    </div>
  );
}

export default App;