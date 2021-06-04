
import SinIn from  "./component/Body"
import download from "./image/download.png"
import mark from "./image/mark.png"

function App() {
  return (
    <div >
      <header class="bg-primary p-5">
        <div class="row">
        <div className="col-md-4">
          <div class="row">
          <div className="col-md-2 "><h6>ENGLISH</h6></div>
          <div className="col-md-2 "><h6>USD</h6></div>
        </div>
        </div>
        <div className="col-md-4 ">
          <img class="mx-auto d-block"src={download} alt='EMBRYO' /> 
        </div>
        <div className="col-md-4"></div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">

        <ul className="navbar-nav mx-auto navbar-brand">
        <li className="nav-item active">
          <a className="nav-link" href="">HOME</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="">SHOP</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="">ACCESSORIES</a>
        </li>
        <li className="nav-item active" >
        <a className="nav-link" href="">CATEGORIES</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="">PAGE</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link"href="">CONTACT US</a>
        </li>
        <li className="nav-item active bg-dark" >
        <a className="nav-link text-white" href="">ADMIN PANNEL</a>
        </li>
        </ul>
      </div>
      </div>
      </nav>

      <SinIn/>

  <footer class="bd-footer py-5  bg-dark">
  
    <div class="row text-white ">

      <div class="col-3 offset-lg-1 mb-3">
      <h5>ABOUT COMPANY</h5>
      <h6 class="text-white">Here you can use rows and columns here to organize your footer content.
        Lorem ipsum dolor sit amet,consectetur adipisicing elit.
        Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h6>
      </div>

      

      <div class="col-6 col-lg-2 mb-3">
        <h5>ABOUT</h5>
        <ul class="list-unstyled ">
          <li class="mb-2 "><a href="">about us</a></li>
          <li class="mb-2"><a href="">terms and condition</a></li>
          <li class="mb-2"><a href="">privacy policy</a></li>
          <li class="mb-2"><a href="">FAQ</a></li>
          <li class="mb-2"><a href="">contact us</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 mb-3">
        <h5>session</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="">sign in</a></li>
          <li class="mb-2"><a href="">register</a></li>
          <li class="mb-2"><a href="">forget password</a></li>
          <li class="mb-2"><a href="">thank you</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 mb-3">
        <h5>CATEGORIES</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="">women</a></li>
          <li class="mb-2"><a href="">men</a></li>
          <li class="mb-2"><a href="">accessories</a></li>
          <li class="mb-2"><a href="">gadgets</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2  mb-3">
        <h5>SOCIAL</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="">facebook</a></li>
          <li class="mb-2"><a href="">twitter</a></li>
          <li class="mb-2"><a href="">youtube</a></li>
          <li class="mb-2"><a href="">google plus</a></li>
        </ul>
      </div>
    
    </div>
    <hr class="rounded bg-white"></hr>
    <div class="clearfix">
     <span class="float-right "> <img  src={mark} alt="mark"></img></span>
      <span class="float-left text-white">© All Rights Reversed | Made With Love by IRON NETWORK for better Web</span>

      
    </div>
</footer>
</div>

  );
}

export default App;
