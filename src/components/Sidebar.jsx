import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Blue Button -> Tract Page */}
      <Link to="/tract" style={{ textDecoration: 'none' }}>
        <button className="blue-side-btn">
          HAVE YOU READ THE EPSILON TRACT?<br />
          <span>CLICK HERE!!</span>
        </button>
      </Link>

      <div className="descendant-box">
        <img src="/assets/kraff_descendant.gif" alt="Possible descendant of Kraff" />
      </div>

      {/* Green Button -> Give Money Page */}
      <Link to="/money" style={{ textDecoration: 'none' }}>
        <button className="green-side-btn">
          CAN YOU PUT A PRICE ON PEACE OF MIND?<br />
          <span>$ CLICK HERE $</span>
        </button>
      </Link>

      <div className="epsilon-logo">
        <img src="/assets/epsilon_logo_small.gif" alt="Epsilon Logo" />
      </div>
    </aside>
  );
};

export default Sidebar;