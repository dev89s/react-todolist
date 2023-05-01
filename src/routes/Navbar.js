import { NavLink } from "react-router-dom";
const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];
const Navbar = () => {
  return (
    <ul className="navbar">
      {links.map((link) => {
        return (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        )
      })}
    </ul>
  );
};
export default Navbar;