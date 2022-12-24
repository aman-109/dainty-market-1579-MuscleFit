

import AllRoute from './AllRoutes/AllRoute';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/NavbarNilam';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
