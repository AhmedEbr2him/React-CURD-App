import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-white border-bottom box-shadow'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Store
        </Link>
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
              <Link to='/' className='nav-link text-dark' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link text-dark'>
                Contact
              </Link>
            </li>
          </ul>

          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-dark'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Admin
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <Link to='/admin/products' className='dropdown-item text-dark'>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to='/profile' className='dropdown-item text-dark'>
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link to='/logout' className='dropdown-item text-dark'>
                    Logout
                  </Link>
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
