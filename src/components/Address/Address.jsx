import "./Address.css";

export const Address = () => {
  return (
    <address className="address">
      m. Warszawa, Aleje Jerozolimskie 21
      <ul className="address__list">
        <li className="address__item">
          <a
            className="address__link"
            href="mailto:info@example.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            info@example.com
          </a>
        </li>
        <li className="address__item">
          <a
            className="address__link"
            href="tel:+48111111111"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            +48 111 111 111
          </a>
        </li>
      </ul>
    </address>
  );
};
