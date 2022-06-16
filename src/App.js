//@ts-check
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'; 

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <body className="App-body">
        <ItemListContainer msg="Bienvenido a la web!"/>
      </body>
    </div>
  );
}

export default App;
