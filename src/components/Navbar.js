import globe from "../assets/globe.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={globe} alt="Earth icon" className="nav__icon" />
      <h2 className="nav__title">my travel journal.</h2>
    </nav>
  );
}
