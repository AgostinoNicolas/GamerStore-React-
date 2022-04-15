import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
/* import ItemListContainer from './components/ItemListContainer'; */
import NavBar from './components/Navbar';




function App() {
  return (
    <div>
      <NavBar />
      {/* <ItemListContainer /> */}
     <ItemDetailContainer />
    </div>
  );
}

export default App;
