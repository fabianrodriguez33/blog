import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          <img src="/images/logo.png" alt="" />
          <span>A DESIGNER&apos;S WORLD</span>
        </NavLink>
        <nav aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/my-process">My Process</NavLink>
          <NavLink to="/design-tips">Design Tips</NavLink>
        </nav>
      </div>
    </header>
  );
}
