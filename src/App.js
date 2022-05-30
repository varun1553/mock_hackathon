import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';

import {Link} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';



function App() {
  return (
    <div >

      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link "  to="Signup">SignUp</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link "  to="Signin">SignIn</Link>

        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>   




                                            
      <Routes>

      <Route path="" element={ <Home />} />
      <Route path="Signup" element={ <Signup />} />
      <Route path="Signin" element={ <Signin />} />
      

      

      </Routes>                                                                                                                                                                 
    </div>
  );
}

export default App;