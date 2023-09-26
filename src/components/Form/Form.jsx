import { Button } from "../Buttons/Button/Button";
import icons from "/assets/icons.svg";
import "./Form.css";

export const Form = () => {
  return (
    <div className="form__wrapper">
      <h2 className="form__title">Leave your contact details</h2>
      <form
        className="form"
        action="https://formspree.io/f/xnqkgywe"
        method="POST"
      >
        <fieldset className="form__group">
          <label className="form__username__label" htmlFor="username">
            Name
          </label>
          <input
            id="username"
            className="form__username__input"
            type="text"
            name="Name"
            autoComplete="list"
            required
          />
          <svg className="form__username__icon">
            <use href={icons + "#icon-human"} />
          </svg>
        </fieldset>
        <fieldset className="form__group">
          <label className="form__phone__label" htmlFor="phone">
            Telephone
          </label>
          <input
            id="phone"
            className="form__phone__input"
            type="tel"
            name="Tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
            autoComplete="list"
            required
          />
          <svg className="form__phone__icon">
            <use href={icons + "#icon-phone2"} />
          </svg>
        </fieldset>
        <fieldset className="form__group">
          <label className="form__email__label" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            className="form__email__input"
            type="email"
            name="Replay to"
            autoComplete="list"
            required
          />
          <svg className="form__email__icon">
            <use href={icons + "#icon-mail2"} />
          </svg>
        </fieldset>
        <fieldset className="form__group__feedback">
          <label className="form__feedback__label" htmlFor="feedback">
            Message
          </label>
          <textarea
            id="feedback"
            className="form__feedback__input"
            name="Massage"
            placeholder="Leave your message"
          ></textarea>
        </fieldset>
        <label className="form__legal__group" htmlFor="legal">
          <input
            id="legal"
            type="checkbox"
            className="form__legal__checkbox"
            required
          ></input>
          <span className="form__legal__title">
            {" "}
            I agree with the{" "}
            <a
              className="form__legal__link"
              href="https://www.termsandcondiitionssample.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Terms & conditions
            </a>{" "}
            and{" "}
            <a
              className="form__legal__link"
              href="https://www.privacypolicygenerator.info/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Privacy policy.
            </a>
          </span>
        </label>
        <Button title="Send" type="submit" />
      </form>
    </div>
  );
};
