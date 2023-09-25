import { Logo } from "../Logo/Logo";
import { Address } from "../Address/Address";
import { Socials } from "../Socials/Socials";
import { FormNewsletter } from "../Form/FormNewsletter/FormNewsletter";
import { TitleSmall } from "../Titles/TitleSmall/TitleSmall";
import { ourSocialLinks } from "../../data/ourSocialLinks";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main-wrapper">
          <div className="footer__address-social-wrapper">
            <div className="footer__address-group">
              <Logo />
              <Address />
            </div>
            <div className="footer__socials">
              <TitleSmall title="follow us on" />
              <Socials ourSocials={ourSocialLinks} styles="--footer" />
            </div>
          </div>
          <FormNewsletter />
        </div>
      </div>
    </footer>
  );
};
