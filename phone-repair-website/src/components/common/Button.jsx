import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, variant = 'primary', href, to, onClick, className = '' }) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  // If it's an external link (starts with http or tel)
  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  // If it's an internal link (using React Router)
  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // If it's a button
  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;