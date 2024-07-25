import Search from '../SemiComponents/Search';
import './Subnavbar.css';
import Button from '../SemiComponents/Button';

export default function Subnavbar({ onQueryChange }) {
  return (
    <div className="custom-navbar">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  <Button nm="Home" onClick={() => onQueryChange('latest')} />
                </a>
              </li>
              <Search onQueryChange={onQueryChange} />
              <li className="nav-item">
                <a className="nav-link text-white" href="#"><Button nm="India" onClick={() => onQueryChange('India')} /></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <Button nm="Sports" onClick={() => onQueryChange('Sports')} />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><Button nm="Football" onClick={() => onQueryChange('Football')} /></a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><Button nm="Cricket" onClick={() => onQueryChange('Cricket')} /></a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><Button nm="Hockey" onClick={() => onQueryChange('Hockey')} /></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}




