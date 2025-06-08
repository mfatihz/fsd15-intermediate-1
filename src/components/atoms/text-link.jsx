import { Link } from "react-router";

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm text-gray-400 hover:underline leading-none mb-2"
  >
    {children}
  </Link>
);

export default FooterLink;

