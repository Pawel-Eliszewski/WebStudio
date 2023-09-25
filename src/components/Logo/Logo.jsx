import { NavLink } from 'react-router-dom';
import './Logo.css';

export const Logo = () => {
  return (
    <NavLink className="logo" to="/">
      <span className="logo-span">Web</span>
      Studio
    </NavLink>
  );
};
