import React from 'react';
import '../Assets/css/style.css';

function NavBar() {
  
  return (
    <>
    <header id="header" class="d-flex flex-column justify-content-center">

      <nav id="navbar" class="navbar nav-menu">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="/about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="/resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="/services" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Services</span></a></li>
          <li><a href="/projects" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>projects</span></a></li>
          <li><a href="/blogs" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Blogs</span></a></li>
        </ul>
      </nav>

    </header>
    </>
  );
}

export default NavBar;