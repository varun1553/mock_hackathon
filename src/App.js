import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';

import {Link} from 'react-router-dom';




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
          <Link className="nav-link "  to=" ">Home</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>   




                                            
      <Routes>

      <Route path="" element={ <Home />} />
      

      </Routes>                                                                                                                                                                 
    </div>
  );
}

export default App;