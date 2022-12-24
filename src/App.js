

import AllRoute from './AllRoutes/AllRoute';
import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from './components/NavbarNilam';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      {/* <AllRoute/> */}
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
