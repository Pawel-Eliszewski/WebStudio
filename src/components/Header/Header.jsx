import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { ButtonBurger } from "../Buttons/ButtonBurger/ButtonBurger";
import { Navigation } from "../Navigation/Navigation";
import { ContactLinks } from "../ContactLinks/ContactLinks";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
    isOpen === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  const handleIsOpen = () => (isOpen === true ? "isOpen" : "");

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__wrapper">
          <Logo />
          <Navigation styles="--header" />
        </div>
        <ButtonBurger onClick={handleClick} />
        <ContactLinks styles="--header" />
      </div>
      <MobileMenu onClick={handleClick} styles={handleIsOpen()} />
    </header>
  );
};
