import React from 'react'

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
          <a class="nav-link active" aria-current="page" href="#">Add Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Delete Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View All</a>
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