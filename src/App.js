// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

// built in component 

// my component 
import Home from './Component/Home';
import NavbarDisk from './Component/Navbar';
import Blogs from './Component/Blogs';
import { selectSignedIn } from './features/UserSlice';
import Footer from './Component/Footer';


// >>>>>>>>>>>>>>>>>>>>>>>
function App() {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="App">
          <NavbarDisk />
    <Home />
    {
      isSignedIn && <Blogs />
    }
<Footer />
    </div>
  );
}

export default App;
