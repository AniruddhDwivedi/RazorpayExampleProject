import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/join">JOIN NOW!</Link></li>
        <li><Link to="/money">GIVE MONEY</Link></li>
        <li><Link to="/">KIFFLOM!</Link></li>
        <li><Link to="/testimonials">TESTIMONIALS</Link></li>
        <li><Link to="/money">GIVE MONEY</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;