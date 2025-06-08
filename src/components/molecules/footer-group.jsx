import { useState, useEffect } from "react";
import FooterLink from "../atoms/text-link";
import ToggleButton from "../atoms/toggle-button";

const FooterGroup = ({ title, links, basePath = "", isGrid = false, gridCols = "" }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setIsOpen(!mobile); // buka default saat non-mobile
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center text-lg font-semibold cursor-pointer"
      >
        {title}
        {isMobile && <ToggleButton isOpen={isOpen} />}
      </button>
      {isOpen && (
        <div
            // TODO: ganti grid ke block column-4
          className={`mx-4 sm:mx-0 ${
            isGrid
              ? `grid gap-1 ${gridCols}`
              : "flex flex-col gap-1"
          }`}
        >
          {links.map(({ label, path }) => (
            <FooterLink key={label} to={`${basePath}${path}`}>
              {label}
            </FooterLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterGroup;
