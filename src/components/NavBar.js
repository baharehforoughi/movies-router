import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      {"-"}
      <Link to="/discover">Discover</Link>
      {"-"}
      <Link to="/about">About</Link>
    </>
  );
};
export default NavBar;
