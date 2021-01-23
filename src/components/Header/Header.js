import {Link} from 'react-router-dom';
import 'materialize-css';
import {Navbar, NavItem} from "react-materialize";


function Header() {
  return (
      <header className='row'>
        <Navbar
            className="col"
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Logo</a>}
            id="mobile-nav"
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </Navbar>
      </header>
  )
}

export default Header;