import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <section className='navbar-bg'>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
        
      </ul>
      
        <form class='d-flex'>
        <button class="btn btn-style " type="submit">Sign Up</button>
        <button class="btn btn-style " type="submit">Log In</button>
        </form>
      
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar;