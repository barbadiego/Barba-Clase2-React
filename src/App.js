//@ts-check
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <Body />
      </body>
    </div>
  );
}

export default App;
