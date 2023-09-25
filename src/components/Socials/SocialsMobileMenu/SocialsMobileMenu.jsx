import './SocialsMobileMenu.css';

export const SocialsMobileMenu = () => {
  return (
    <ul className="social__list-mobile">
      <li className="social__item-mobile">
        <a
          className="social__link-mobile"
          href="https://www.instagram.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="instagram"
        >
          Instagram
        </a>
      </li>
      <li className="social__item-mobile">
        <a
          className="social__link-mobile"
          href="https://www.twitter.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="twitter"
        >
          Twitter
        </a>
      </li>
      <li className="social__item-mobile">
        <a
          className="social__link-mobile"
          href="https://www.facebook.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="facebook"
        >
          Facebook
        </a>
      </li>
      <li className="social__item-mobile">
        <a
          className="social__link-mobile"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="linkedin"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};
