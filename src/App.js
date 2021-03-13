// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

// built in component 

// my component 
import Home from './Component/Home';
import NavbarDisk from './Component/Navbar';
import Blogs from './Component/Blogs';
import { selectSignedIn } from './features/UserSlice';


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

    </div>
  );
}

export default App;
