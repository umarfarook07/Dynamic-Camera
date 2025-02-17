/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick} className="control-button">
    {children}
  </button>
);

export default Button