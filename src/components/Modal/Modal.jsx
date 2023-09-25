import PropTypes from "prop-types";
import { ButtonClose } from "../Buttons/ButtonClose/ButtonClose";
import { Form } from "../Form/Form";
import "./Modal.css";
/**
 * @param {{ styles: 'isOpen' | "", onClick?: (ev?: import('react').MouseEvent) => void }} props
 */
export const Modal = ({ onClick, styles }) => {
  return (
    <div className={"modal__backdrop " + styles}>
      <div className="modal__container">
        <ButtonClose onClick={onClick} />
        <Form />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.string,
};
