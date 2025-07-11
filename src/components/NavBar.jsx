import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/DeleteProduct">Delete Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/SearchProduct">Search Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewAll">View All</Link>
        </li>
      </ul>
      <span class="navbar-text">
      </span>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar