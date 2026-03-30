import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <header className="site-header">
        <img
          src="/assets/header_animation.gif"
          alt="Epsilon Header"
          className="header-gif"
        />
      </header>

      <hr className="nav-line" />
      <Navbar />
      <hr className="nav-line" />

      <div className="content-wrapper">
        <Sidebar />
        <main className="page-content">
          {children} {}
        </main>
      </div>

      <footer className="site-footer">
        <img src="/assets/footer.jpg" alt="Footer" />
      </footer>
    </div>
  );
};

export default Layout;
