<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-white border-bottom box-shadow'>
      <div className='container'>
<<<<<<< HEAD
        <Link to='/' className='navbar-brand'>
          Store
        </Link>
=======
        <a className='navbar-brand' href='#'>
          Store
        </a>
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
<<<<<<< HEAD
              <Link to='/' className='nav-link text-dark' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link text-dark'>
                Contact
              </Link>
=======
              <a className='nav-link text-dark' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href='#'>
                Contact
              </a>
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
            </li>
          </ul>

          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-dark'
<<<<<<< HEAD
=======
                href='#'
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Admin
              </a>
              <ul className='dropdown-menu'>
                <li>
<<<<<<< HEAD
                  <Link to='' className='dropdown-item text-dark'>
                    Products
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item text-dark'>Profile</Link>
=======
                  <a className='dropdown-item text-dark' href='#'>
                    Products
                  </a>
                </li>
                <li>
                  <a className='dropdown-item text-dark' href='#'>
                    Profile
                  </a>
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
<<<<<<< HEAD
                  <Link className='dropdown-item text-dark'>Logout</Link>
=======
                  <a className='dropdown-item text-dark' href='#'>
                    Logout
                  </a>
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <div className='text-center p-4 border-top'>
      <p>Store</p>
    </div>
  );
};
