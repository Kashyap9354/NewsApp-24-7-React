import PropTypes from 'prop-types';
import './Button.css'; // Optional, for custom styles

const Button = ({ nm, onClick }) => {
  return (
    <button className="custom-button" onClick={() => onClick(nm)}>
      {nm}
    </button>
  );
};

Button.propTypes = {
  nm: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;


