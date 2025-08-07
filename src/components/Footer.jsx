import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <Link to="/about">About us</Link>
      <Link to="/read-me">Read Me</Link>
      <a
        href="https://github.com/RFelix1790"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
